const config = require('config')
const Twitch = require('./lib/twitch')
const debug = require('debug')('scavenger:development')
const { auth_token_uri, client_id, client_secret, api_url, api_version } = config.get('twitch')

const TWITCH_CONFIG = {
    client_id,
    client_secret,
    auth_token_uri,
    grant_type: 'client_credentials',
    redirect_url: 'http://localhost:8080'
}

;(async () => {
    debug('> TwitchAPI')
    try {
        const twitch_client = new Twitch(TWITCH_CONFIG)

        twitch_client.setScope(['user_read'])
        
        const search_channels = await twitch_client.get(`${api_url}/${api_version}/search/channels?query=marcobrunodev`)

        debug('> search_channels', search_channels.body)
    } catch (error) {
        console.error('> Oh NO! An wild error appears\n', error)
    }
})()
