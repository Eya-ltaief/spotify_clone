import { useEffect, useState } from 'react'
import axios from 'axios'


const UseAuth = (code) => {
    const[accessToken,setAccessToken] =useState()
    const[refreshToken,setRefreshToken] =useState()
    const[expiresToken,setExpiresToken] =useState()

    useEffect(() => {
    axios
      .post("http://localhost:3001/login", {
        code,
      })
      .then(res => {
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresToken(res.data.expiresToken)
        window.history.pushState({}, null, "/")
      })
      .catch(() => {
        window.location = "/"
      })
  }, [code])

  useEffect(() => {
    if (!refreshToken || !expiresToken) return
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", {
          refreshToken,
        })
        .then(res => {
          setAccessToken(res.data.accessToken)
          setExpiresToken(res.data.expiresToken)
        })
        .catch(() => {
          window.location = "/"
        })
    }, (expiresToken - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresToken])

  return accessToken
}

export default UseAuth