const config = require('config')
const Twitch = require('./lib/twitch')
const debug = require('debug')('scavenger:development')
const { auth_token_uri, client_id, client_secret, api_url, api_version, redirect_url } = config.get('twitch')

const TWITCH_CONFIG = {
    grant_type: 'client_credentials',
    client_id,
    client_secret,
    auth_token_uri,
    redirect_url
}

;(async () => {
    debug('> TwitchAPI')
    
    try {
        const twitch_client = new Twitch(TWITCH_CONFIG)

        twitch_client.scope = ['user_read']
        
        const search_channels = await twitch_client.get(`${api_url}/${api_version}/search/channels?query=Scienc & Technology&live_only=true`)

        debug('> search_channels', search_channels.body)
    } catch (error) {
        console.error('> Oh NO! An wild error appears\n', error)
    }
})()
