/* eslint max-lines-per-function: off */
const { describe, it } = require('mocha')
const { expect } = require('chai')
const Twitch = require('../../src/lib/twitch')

const TWITCH_API_CONFIG = {
    grant_type: 'client_credentials',
    client_id: 'client_id',
    client_secret: 'client_secret',
    auth_token_uri: 'https://id.twitch.tv/oauth2/token',
    redirect_url: 'redirect_url'
}

describe('>>> Twitch Client unit lib tests', () => {

    context('>> Twitch lib', () => {
        it('should be a function', () => {
            expect(Twitch).to.be.an('function')
        })

        it('should throw an error if none option is passed', () => {
            expect(() => {
                const twitch = new Twitch() // eslint-disable-line
            }).to.throw(Error, 'You should pass the required params')
        })

        it('should throw error if grant_type was not one of the three grant type options', () => {
            expect(() => {
                const twitch = new Twitch({ // eslint-disable-line
                    grant_type: 'grant_type',
                    client_id: 'client_id',
                    client_secret: 'client_secret',
                    auth_token_uri: 'auth_token_uri',
                    redirect_url: 'redirect_url'
                })
            }).to.throw(Error, 'You should pass one of the three grant_type options: authorization_code, client_credentials, code')
        })

        it('shouldnt throw errors if all min required params was passed', () => {
            expect(() => {
                const twitch = new Twitch(TWITCH_API_CONFIG)
            }).to.not.throw()
        })

        it('should throw error if missing any required param and which required param is missing', () => {
            expect(() => {
                const twitch = new Twitch({ // eslint-disable-line
                    client_id: 'client_id',
                    client_secret: 'client_secret'
                })
            }).to.throw(Error, 'Params required: grant_type, auth_token_uri, redirect_url')
        })
    })

    context('>> Authorization', () => {

        it('getAuthorizationURL should return a valid url auth token twitch', () => {
            const twitch = new Twitch(TWITCH_API_CONFIG)

            twitch.scope = [
                'user_read',
                'user_email'
            ]

            const query_string = new URLSearchParams({
                client_id: 'client_id',
                client_secret: 'client_secret',
                grant_type: 'client_credentials',
                scope: twitch.scope
            })

            expect(twitch.getAuthorizationURL()).to.be.equal(`${TWITCH_API_CONFIG.auth_token_uri}?${query_string}`)
        })

        it('set scope should throw an error if scope is not an array', () => {
            expect(() => {
                const twitch = new Twitch(TWITCH_API_CONFIG)

                twitch.scope = 'user_read'
            }).to.throw(Error, 'It should be an Array!')
        })

        it('set scope shouldnt throw an error if scope was passed', () => {
            expect(() => {
                const twitch = new Twitch(TWITCH_API_CONFIG)

                twitch.scope = [
                    'user_read',
                    'user_email'
                ]
            }).to.not.throw()
        })

        it('get scope should return encoded URIComponent param', () => {
            const twitch = new Twitch(TWITCH_API_CONFIG)

            twitch.scope = [
                'user_read',
                'user_email'
            ]
            
            expect(twitch.scope).to.be.equal('user_read user_email')
        })

        it('createRequestHeaders should return authorization request header', () => {
            const twitch = new Twitch(TWITCH_API_CONFIG)

            expect(twitch.createRequestHeaders().headers).to.have.keys([
                'client-id',
                'Authorization'
            ])
        })
    })
    
})
