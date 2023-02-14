import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_LOST } from '../../api'
import Error from '../Helper/Erro'
import Head from '../Helper/Head'


const LoginPasswordRecover = () => {

    const login = useForm()
    const { data, loading, error, request } = useFetch()

    async function handleSubmit(event) {
        event.preventDefault()
        if (login.validate()) {
            const { url, options } = PASSWORD_LOST({ login: login.value, url: window.location.href.replace('forgot', 'reset') })
            request(url, options)
        }
    }

    return (
        <section className='animLeft'>
            <Head title="Recuperar senha" />
            <h1 className='title'>Perdeu a senha?</h1>
            {data ?
                <p>{data}</p> :
                <form onSubmit={handleSubmit}>
                    <Input label="Email / Usuário" type="text" name="login" {...login} />
                    {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar e-mail</Button>}
                    {error && <Error error={error} />}
                </form>
            }

        </section>
    )
}

export default LoginPasswordRecover