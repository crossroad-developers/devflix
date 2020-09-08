const request = require('got')

/**
 * Twitch Client
 * @param {*} options Auth options for twitch client
 * 
 * @returns {function} Twitch Client
 */
class Twitch {

    constructor (options) {
        try {
            this.requiredParams = [
                'grant_type',
                'client_id',
                'client_secret',
                'auth_token_uri',
                'redirect_url'
            ]
            this.grantTypeOptions = [
                'authorization_code',
                'client_credentials',
                'code'
            ]

            this.options = options

            if (!this.options) {
                throw new Error('You should pass the required params')
            }

            this.grantRequiredParams()
        } catch (error) {
            throw new Error(error)
        }
    }

    grantRequiredParams () {
        const optionKeys = Object.keys(this.options)
        let missingFields = this.requiredParams.filter((required) => !optionKeys.includes(required))

        const hasRequiredParams = (options) => {

            let hasAllRequiredParams = this.requiredParams.map((requiredParam) => options.indexOf(requiredParam) >= 0) // eslint-disable-line

            return hasAllRequiredParams.every((param) => param === true)
        }

        const hasRightGrantType = (grant_type) => this.grantTypeOptions.some((grantTypeOptions) => grantTypeOptions === grant_type)

        const hasAllRequiredParams = hasRequiredParams(optionKeys)

        if (!hasAllRequiredParams) {
            throw new Error(`Params required: ${missingFields.join(', ')}`)
        }

        if (hasAllRequiredParams && !hasRightGrantType(this.options.grant_type)) {
            throw new Error('You should pass one of the three grant_type options: authorization_code, client_credentials, code')
        }
    }

    set scope (scopeArray) {

        if (!Array.isArray(scopeArray)) {
            throw new Error('It should be an Array!')
        }

        this.options.scope = scopeArray
    }

    get scope () {
        return this.options.scope.join(' ')
    }

    getAuthorizationURL () {
        let query_string = {
            client_id: this.options.client_id,
            client_secret: this.options.client_secret,
            grant_type: this.options.grant_type
        }

        if (this.scope) {
            query_string.scope = this.scope
        }

        return `${this.options.auth_token_uri}?${new URLSearchParams(query_string)}`
    }

    createRequestHeaders (access_token) { // eslint-disable-line
        const requestHeaders = {
            headers: {
                'client-id': this.options.client_id,
                Authorization: `Bearer ${access_token}`
            }
        }

        return requestHeaders
    }

    async get (url) {
        const auth = await this.authorize()

        const { headers } = this.createRequestHeaders(auth.access_token)

        return request(url, {
            responseType: 'json',
            headers
        })
    }

    async authorize() { // eslint-disable-line
        try {
            const { body } = await request.post(this.getAuthorizationURL(), {
                responseType: 'json'
            })
            
            const { access_token, expires_in, scope, token_type } = body
    
            return {
                access_token,
                expires_in,
                scope,
                token_type
            }
        } catch (error) {
            console.error('> errornelson', error)
        }
    }
}

module.exports = Twitch
