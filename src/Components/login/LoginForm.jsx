import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UseContext'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helper/Erro'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'

const LoginForm = () => {

    const username = useForm()
    const password = useForm()

    const { userLogin, error, loading } = React.useContext(UserContext)

    async function handleLogin(event) {

        event.preventDefault()

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value)
        }

    }

    return (
        <section className='animLeft'>
            <h1 className='title'>Login</h1>
            <form className={styles.form} action="" onSubmit={handleLogin}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />
                {loading ? <Button disabled>Entrando..</Button> : <Button>Entrar</Button>}
                <Error error={error && 'Dados incorretos.'} />
            </form>
            <Link className={styles.forgot} to="/login/forgot" >Esqueceu a senha?</Link>
            <Link to="/login/criar" >Cadastro</Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to="/login/criar" >Cadastro</Link>
            </div>
        </section>
    )
}

export default LoginForm