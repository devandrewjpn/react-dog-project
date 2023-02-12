import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UseContext'
import { ReactComponent as AddIcon } from '../../Assets/adicionar.svg'
import { ReactComponent as FeedIcon } from '../../Assets/feed.svg'
import { ReactComponent as StatsIcon } from '../../Assets/estatisticas.svg'
import { ReactComponent as LogoffIcon } from '../../Assets/sair.svg'
import styles from './HeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

const HeaderNav = () => {

    const mobile = useMedia('(max-width: 40rem)')
    const { userLogout } = React.useContext(UserContext)
    const [mobileMenu, setMobileMenu] = React.useState(false)

    const { pathname } = useLocation()
    React.useEffect(() => {
        setMobileMenu(false)
    }, [pathname])

    return (
        <>
            {mobile && <button className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} aria-label='Menu' onClick={() => setMobileMenu(!mobileMenu)}></button>}
            <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
                <NavLink to="/conta" end><FeedIcon />{mobile && 'Feed'}</NavLink>
                <NavLink to="/conta/stats/"><StatsIcon />{mobile && 'Estatísticas'}</NavLink>
                <NavLink to="/conta/post "><AddIcon />{mobile && 'Add foto'}</NavLink>
                <button onClick={userLogout}><LogoffIcon />{mobile && 'Sair'}</button>
            </nav>
        </>
    )
}

export default HeaderNav