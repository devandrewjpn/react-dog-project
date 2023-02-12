import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserHeader from './UserHeader'
import UserPostPhoto from './UserPostPhoto'
import UserStats from './UserStats'

const User = () => {
    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path='/' element={<Feed />} />
                <Route path='/post' element={<UserPostPhoto />} />
                <Route path='/stats' element={<UserStats />} />
            </Routes>
        </section>
    )
}

export default User