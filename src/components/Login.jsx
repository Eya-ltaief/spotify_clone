import React from 'react'




const auth_url = "https://accounts.spotify.com/authorize?client_id=c15899c1039948288f454eb5b6452fc9&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login = () => {
  return (
    <div className="d-flex justify-center align-items-center align-items-center" style={{minHeight: "100vh"}}>
       <a className='btn btn-success btn-lg' href={auth_url}>
          Login With Spotify
       </a>
     </div>
  )
}

export default Login