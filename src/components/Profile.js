import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signInWithGoogle, auth } from '../services/firebase'

import NavBottomBar from './navigation/NavBottomBar'

const Profile = (props) => {
  const [dataProfile, setDataProfile] = useState()
  useEffect(() => {
    setDataProfile(props.data)
  }, [])
  console.log(dataProfile)
  return (
    <div className='wrapper'>
      <div className='page'>
        <NavLink to='/'>
          <div className='col-2'>
            <h2>&lt;--</h2>
          </div>
        </NavLink>
        <p>Profile</p>
        {props.data ? (
          <div className='row'>
            <p className='col'>{props.data.uid}</p>
            <p className='col'>{props.data.email}</p>
            <p className='col'>{props.data.name}</p>
            <img className='col' src={props.data.image}></img>
            {/* <p className="col">{props.data.image}</p> */}
            <p className='col'>{props.data.phone}</p>
          </div>
        ) : (
          <div></div>
        )}

        <NavLink
          to='/'
          onClick={() => {
            auth.signOut()
            props.dispatch({
              type: 'SIGN_OUT',
            })
          }}
        >
          <button>sign out</button>
        </NavLink>
        <NavBottomBar />
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    data: state.dataUser,
  }
}
export default connect(mapStateToProps)(Profile)
