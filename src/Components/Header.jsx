import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Dogs } from '../Assets/dogs.svg'
import { UserContext } from '../UseContext'

const Header = () => {

  const { data, userLogout } = React.useContext((UserContext))

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label='Home'>
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta" >{data.nome}<button onClick={userLogout}>sair</button></Link>
        ) : (
          <Link className={styles.login} to="/login" >Login / Criar</Link>
        )}
        
      </nav>
    </header>
  )
}

export default Header