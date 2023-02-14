import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from '../../UseContext'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPasswordRecover from './LoginPasswordRecover'
import LoginPasswordReset from './LoginPasswordReset'
import styles from './Login.module.css'
import NotFound from '../NotFound'
import Head from '../Helper/Head'

const Login = () => {

  const { login } = React.useContext(UserContext)
  if (login === true) return <Navigate to="/conta" />

  return (
    <section className={styles.login}>
      <Head title="Entrar" />
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='criar' element={<LoginCreate />} />
          <Route path='forgot' element={<LoginPasswordRecover />} />
          <Route path='reset' element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login