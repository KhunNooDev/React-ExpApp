import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import styles from '../css/NavBottomBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ListProduct from '../ListProduct'

export default function NavBottomBar() {
  const [option, setOption] = useState('home')

  const Page = () => {
    if (option == 'home') {
      return <ListProduct />
    } else {
      return <div></div>
    }
  }
  console.log(option)
  return (
    <div className={styles.bottomAppbar}>
      <div className={styles.tabs}>
        <div className={`${styles.tab} ${styles.tabLeft}`}>
          <div className='row'>
            <div className={`${'col-6'} ${styles.menuNav}`}>
              <NavLink to='/' className={styles.barLink}>
                <div className={styles.iconsBar}>
                  <FontAwesomeIcon icon='fa-solid fa-house' />
                </div>
                <span onClick={() => setOption('home')}>Home</span>
              </NavLink>
            </div>
            <div className={`${'col-6'} ${styles.menuNav}`}>
              <NavLink to='/fridge' className={styles.barLink}>
                <div className={styles.iconsBar}>
                  <FontAwesomeIcon icon='fa-solid fa-snowflake' />
                </div>
                <span onClick={() => setOption('fridge')}>Fridge</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={`${styles.tab} ${styles.tabFab}`}>
          <div className={styles.top}>
            <NavLink to='/scan' className={styles.additem}>
              <div className={styles.fab}>
                <FontAwesomeIcon icon='fa-solid fa-plus' />
              </div>
            </NavLink>
          </div>
        </div>
        <div className={`${styles.tab} ${styles.tabRight}`}>
          <div className='row'>
            <div className={`${'col-6'} ${styles.menuNav}`}>
              <NavLink to='/category' className={styles.barLink}>
                <div
                  className={styles.iconsBar}
                  style={{ transform: 'translateX(15%)' }}
                >
                  <FontAwesomeIcon icon='fa-solid fa-layer-group' />
                </div>
                <span onClick={() => setOption('category')}>CATEGORY</span>
              </NavLink>
            </div>
            <div className={`${'col-6'} ${styles.menuNav}`}>
              <NavLink to='/profile' className={styles.barLink}>
                <div className={styles.iconsBar}>
                  <FontAwesomeIcon icon='fa-solid fa-user' />
                </div>
                <span>Profile</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
