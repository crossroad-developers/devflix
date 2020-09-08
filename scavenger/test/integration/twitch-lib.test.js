/* eslint max-lines-per-function: off */
const mocha = require('mocha')
const describe = mocha.describe // eslint-disable-line
const { expect } = require('chai')
const nock = require('nock')
const request = require('got')
const Twitch = require('../../src/lib/twitch')
const debug = require('debug')('scavenger:test')

const TWITCH_API_CONFIG = {
    grant_type: 'client_credentials',
    client_id: 'client_id',
    client_secret: 'client_secret',
    auth_token_uri: 'https://id.twitch.tv/oauth2/token',
    redirect_url: 'http://localhost:8080'
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

    /*
     * BeforeEach(() => {
     *     debug('> beforeEach')
     */

    /*
     *     nock('https://id.twitch.tv/').
     *         post('/oauth2/token').
     *         reply(statuses.ok.code, twitch_response.authorization)
     * })
     */

    context('>> Authorization', () => {
        it('authorize() should return JSON-encoded object TwitchAPI', async () => {
            const twitch = new Twitch(TWITCH_API_CONFIG)

            twitch.scope = ['user_read']

            /*
             * Expect(await twitch.authorize()).to.be.an('object')
             * const { body } = await request.post(twitch.getAuthorizationURL(), {
             *     responseType: 'json'
             * })
             */
            /*
             * Const scope = nock('https://id.twitch.tv/').
             *     post('/oauth2/tokeneixon').
             *     reply(statuses.ok.code, twitch_response.authorization)
             */

            // Debug('> scope', scope)
            
            /*
             * Request.
             *     post('/oauth2/token').
             *     end((err, res) => {
             *         if (err) {
             *             console.error(err)
             *         }
             *         expect(res.body.access_token).to.be.equal('0123456789abcdefghijABCDEFGHIJ')
             */

            /*
             *         Done()
             *     })
             */
        })

        it('authorize should return JSON-encoded object TwitchAPI', async () => {
            // Const twitch = new Twitch(TWITCH_API_CONFIG)

            /*
             * Expect(await twitch.authorize()).to.have.keys([
             *     'access_token',
             *     'expires_in',
             *     'scope',
             *     'token_type'
             * ])
             */
        })

        it('should autorize to late request with status 200 and right params', (done) => {
            /*
             * nock('https://id.twitch.tv/').
             *     post('/oauth2/token').
             *     reply(statuses.ok.code, twitch_response.authorization)
             */

            /*
             * Request.
             *     post('/oauth2/token').
             *     end((err, res) => {
             *         if (err) {
             *             console.error(err) 
             *         }
             *         expect(res.body.access_token).to.be.equal('0123456789abcdefghijABCDEFGHIJ')
             */

            /*
             *         Done()
             *     })
             */
            done()
        })
    })

})
