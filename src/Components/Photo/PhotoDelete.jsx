import React from 'react'
import { DELETE_PHOTO } from '../../api'
import useFetch from '../../Hooks/useFetch'
import styles from './PhotoDelete.module.css'

const PhotoDelete = ({id}) => {

    const {loading,request} = useFetch()

    async function deletePhoto() {
        const confirm = window.confirm('Deletar foto?')
        if(confirm){
            const {url,options} = DELETE_PHOTO(id)
            const {response} = await request(url,options)
            if(response.ok) window.location.reload()
        }
        
    }

  return (
    <>
        {loading ? <button disabled className={styles.delete}>Deletando..</button> : <button onClick={deletePhoto} className={styles.delete}>Deletar</button>}
    </>
  )
}

export default PhotoDelete