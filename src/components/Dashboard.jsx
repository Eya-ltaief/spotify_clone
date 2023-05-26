import React from 'react'
import { useEffect } from 'react'
import SpotifyWebApi from "spotify-web-api-node"
import useAuth from './UseAuth'


const spotifyApi = new SpotifyWebApi({
  clientId: "c15899c1039948288f454eb5b6452fc9",
})

const Dashboard = ({code}) => {
    const accessToken=useAuth(code)
     useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])
  return (

    <div>
       {code}
    </div>
  )
}

export default Dashboard