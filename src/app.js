const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

//define paths for express config
const viewsPath = path.join(__dirname, '../templates/views')
app.use(express.static(path.join(__dirname, '../public')))
const partialsPath = path.join(__dirname, '../templates/partials')
// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Luis Zuluaga'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        message: 'help message not that long',
        name: 'Luis Zuluaga',
        title: 'Help'
    })
})  

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Luis Zuluaga'
    })
})  

app.get('/weather', (req, res) => {
    if (!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error) {
            return res.send({error})
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send(({
                forecast:forecastData,
                location,
                address: req.query.address
            }))
        })
    })
})  

app.get('/products', (req, res) => {
    if (!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products:[]
    })
})  


app.get('help/*', (req, res) => {
    res.send('wut')
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Luis Zuluaga'
    })
})

app.listen(3000, () =>{
    console.log('Server is up on port 3000')
})