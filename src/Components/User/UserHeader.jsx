import React from 'react'
import { useLocation } from 'react-router-dom'
import HeaderNav from './HeaderNav'
import styles from './UserHeader.module.css'

const UserHeader = () => {

    const [title, setTitle] = React.useState('')
    const location = useLocation()

    React.useEffect(() => {
        const { pathname } = location;
        switch (pathname) {
            case '/conta/post':
                setTitle('Postar foto')
                break
            case '/conta/stats/':
                setTitle('Estatisticas')
                break
            default:
                setTitle('Minha conta')
        }
    }, [location])

    return (
        <div className={styles.header}>
            <h1 className='title'>{title}</h1>
            <HeaderNav />
        </div>
    )
}

export default UserHeader