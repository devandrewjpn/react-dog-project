import React from 'react'

const useForm = () => {

    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)

    function validate(value) {
        if (value.length === 0) {
            setError('Preencha o campo anter de prosseguir.')
            return false;
        } else {
            setError(null)
            return true;
        }
    }

    function onChange({ target }) {
        if (error) validate(target.value)
        setValue(target.value)
    }

    return {
        value,
        setValue,
        onChange,
        validate: () => validate(value),
        onBlur: () => validate(value),
        error
    }


}

export default useForm