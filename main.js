const Starling = require('starling-developer-sdk')
import conf from './config.json'

const client = new Starling({
    apiUrl: 'https://api-sandbox.starlingbank.com',
    accessToken: conf.key
})

client.account.getAccounts()
    .then(({ data }) => console.log(data))
    .catch(err => console.log(err))