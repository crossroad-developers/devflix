/**
 * Twitch Client
 * @param {*} options Auth options for twitch client
 * 
 * @returns {function} Twitch Client
 */
const TwitchClient = (options) => {

    try {
        this.client_id = options.client_id
        this.client_secret = options.client_secret
        this.grant_type = options.grant_type
        this.scope = options.scope
    } catch (error) {
        throw new Error(error)
    }

    return this
}

module.exports = TwitchClient
