import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UseContext'
import Feed from '../Feed/Feed'
import Head from '../Helper/Head'
import NotFound from '../NotFound'
import UserHeader from './UserHeader'
import UserPostPhoto from './UserPostPhoto'

const User = () => {

    const { data } = React.useContext(UserContext)

    return (
        <section className="container">
            <Head title="Minha conta" />
            <UserHeader />
            <Routes>
                <Route path='/' element={<Feed user={data.id} />} />
                <Route path='/post' element={<UserPostPhoto />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </section>
    )
}

export default User