const config = require('config')
const debug = require('debug')('scavenger:development')
const request = require('got')
const { auth_token_url, client_id, client_secret, api_url, api_version }  = config.get('twitch')

let qs = new URLSearchParams({
    client_id,
    client_secret,
    grant_type: 'client_credentials',
    scope: encodeURIComponent(['user_read'].join(' '))
})

let TWITCH_URL_CALL = `${auth_token_url}?${qs}`

;(async () => {
    debug('> twitch api url', TWITCH_URL_CALL)
    try { 
        const { body } = await request.post(TWITCH_URL_CALL, {
            responseType: 'json'
        })
        const { access_token, expires_in, scope, token_type } = body
        
        debug('> access_token, expires_in, scope, token_type', access_token, expires_in, scope, token_type)
        
        const search_channels = await request(`${api_url}/${api_version}/search/channels?query=marcobrunodev`, {
            responseType: 'json',
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Client-ID': client_id,
                'Content-Type': 'application/json'
            }
        })
        debug('> search_channels', search_channels.body)
    } catch (error) {
        console.error('> oh no an error', error)
    }
})()
