import React from 'react'
import { signInWithGoogle, auth } from "../../services/firebase";

export default function Auth() {
  return (
    <div className="wrapper">
      <div className="page">
       <div className='container '>
       <div className="row position-absolute top-50 start-50 translate-middle m-0">
          <div className="col">
          <img src="logo.png" className="rounded mx-auto d-block" alt="..." />

            <h2 className='text-center'>Welcome to</h2>
            <h2 className='text-center '>APP NAME</h2>
            <div className='text-center mt-3'>
            <button className='btn btn-primary'onClick={signInWithGoogle}>Continue with Google</button>
            </div>
          </div>
        </div>
       </div>
       {/* "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ], */}
        {/* </div> */}
      </div>
     
    </div>
  )
}
