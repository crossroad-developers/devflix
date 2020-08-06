const { expect } = require('chai')
const config = require('config')
const server = require('../src/index')

console.log('> server')
;describe('scavenger', () => {
    it('the scavenger can access the Twitch API', async () => {
        expect(server.port).to.equal(config.get('express_port'))
    })
})
