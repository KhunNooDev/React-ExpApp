//import "./Home.css";
import styles from './css/Page.module.css'

import ListProduct from './ListProduct'
import Search from './Search'
import Profile from './Profile'
import NavBottomBar from './navigation/NavBottomBar'

function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.navbar} style={{ marginBottom: '0px' }}>
        <div className='row'>
          <div className='col-6'>
            <h2>APP NAME</h2>
          </div>
          <div className='col-6 '>
            <h2 className='text-end'>-</h2>
          </div>
        </div>
        <Search />
      </header>
      <section className={styles.item}>
        <ListProduct />
        <ListProduct />
      </section>
      <footer>
        <NavBottomBar />
      </footer>
    </div>
  )
}

export default Home
