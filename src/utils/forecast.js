const request = require('request')

const forecast = (latitude, longitude, callback) => {
    key = "83e930b3ebfa944d10b464a1635de40b"
    base_url = "http://api.weatherstack.com/current"
    url_params = `?access_key=${key}&query=medellin`
    const url = base_url + url_params + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current)
        }
    })
}

module.exports = forecast