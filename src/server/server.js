require("dotenv").config()
const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))








app.post('/login', (req,res)=>{
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUrl: 'http://localhost:3000',
        clientId:'c15899c1039948288f454eb5b6452fc9',
        clientSecret :'c376a1a725e346b59c69c493e83756d2',
        refreshToken
    })


spotifyApi.authorizationCodeGrant(code).then(data=>{
    res.json({
       
            accessToken: data.body.accessToken,
            refreshToken: data.body.refreshToken,
            expiresToken: data.body.expiresIn

        })
    })
    .catch(()=>{
        console.log(err)
        res.sendStatus(400)
    })

})