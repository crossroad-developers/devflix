/* eslint max-lines-per-function: off */
const { describe, it } = require('mocha')
const { expect } = require('chai')
const nock = require('nock')
const request = require('supertest')('https://id.twitch.tv/oauth2/token')
const Twitch = require('../../src/lib/twitch')

const TWITCH_API_CONFIG = {
    grant_type: 'client_credentials',
    client_id: 'client_id',
    client_secret: 'client_secret',
    auth_token_uri: 'https://id.twitch.tv/oauth2/token',
    redirect_url: 'redirect_url'
}

const statuses = {
    'ok': {
        code: 200,
        message: 'Legal!'
    }
}

const twitch_response = {
    authorization: {
        body: {
            'access_token': '0123456789abcdefghijABCDEFGHIJ',
            'refresh_token': 'eyJfaWQmNzMtNGCJ9%6VFV5LNrZFUj8oU231/3Aj',
            'expires_in': 3600,
            'scope': 'viewing_activity_read',
            'token_type': 'bearer'
        }
    }
}

describe('>>> Twitch Client integration lib tests', () => {

    context('>> Authorization', () => {
        it('autorize should return JSON-encoded object TwitchAPI', () => {
            const twitch = new Twitch(TWITCH_API_CONFIG)

            expect(twitch.authorize()).to.be.an('object')
        })

        it('autorize should return TwitchAPI OAuth params', () => {
            const twitch = new Twitch(TWITCH_API_CONFIG)

            expect(twitch.authorize()).to.have.keys([
                'access_token',
                'expires_in',
                'scope',
                'token_type'
            ])
        })

        it('should autorize to late request with status 200 and right params', (done) => {

            nock('https://id.twitch.tv/').
                post('/oauth2/token').
                reply(statuses.ok.code, twitch_response.authorization)

            request.
                post('/oauth2/token').
                end((err, res) => {
                    if (err) {
                        console.error(err) 
                    }
                    expect(res.body.access_token).to.be.equal('0123456789abcdefghijABCDEFGHIJ')

                    done()
                })
        })
    })

})
