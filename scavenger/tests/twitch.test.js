const { expect } = require('chai')
const TwitchClient = require('../src/lib/twitch')

describe('Twitch Client lib', () => {

    it('the twitch lib has to be a function', async () => {
        expect(TwitchClient).to.be.an('function')
    })

    it('throw error if the twitch lib not receive client_id params', async () => {
        try {
            let _t = TwitchClient()
        } catch (error) {
            expect(error.message).to.be.equal('É necessário passar o client_id') // eslint-disable-line
        }
    })

})
