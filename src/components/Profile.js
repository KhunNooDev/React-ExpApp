import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signInWithGoogle, auth } from '../services/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './css/Profile.module.css'

import NavBottomBar from './navigation/NavBottomBar'

const Profile = (props) => {
  const [dataProfile, setDataProfile] = useState()
  useEffect(() => {
    setDataProfile(props.data)
  }, [])
  console.log(dataProfile)
  return (
    <>
      <header className={styles.top}>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <NavLink to='/'>
                <FontAwesomeIcon icon='fa-solid fa-arrow-left-long' size='xl' />
              </NavLink>
            </div>
            {/* <div className='col-6'>
              <NavLink to='/'>
                <h2 className='text-end'>
                  <FontAwesomeIcon icon='fa-solid fa-gear' size='xl' />
                </h2>
              </NavLink>
            </div> */}
          </div>
        </div>
      </header>
      <section className={styles.cardInfoUser}>
        {props.data ? (
          <div className='container'>
            <div className='row'>
              <div className={styles.avatar}>
                <img alt='' src={props.data.image} />
              </div>
              <div className={styles.info}>
                <div className={styles.title}>{props.data.name}</div>
                <p className='col'>{props.data.uid}</p>
                <div className={styles.desc}>
                  <div className='row'>
                    <div className='col-4 text-start'>Email</div>
                    <div className='col-8 text-start'>{props.data.email}</div>
                  </div>
                  <div className='row'>
                    <div className='col-4 text-start'>Phone Number</div>
                    <div className='col-8 text-start'>{props.data.phone}</div>
                  </div>
                  <div className='row'>
                    <div className='col-4 text-start'>Feedback</div>
                    <div className='col-8 text-start'>ttttttt</div>
                  </div>
                  {/* <div className='row'> */}
                  <button className='btn btn-primary'>history</button>
                  {/* </div> */}
                </div>
              </div>
            </div>
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
          <button className='btn btn-danger'>sign out</button>
        </NavLink>
      </section>
      <footer>
        <NavBottomBar />
      </footer>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    data: state.dataUser,
  }
}
export default connect(mapStateToProps)(Profile)
