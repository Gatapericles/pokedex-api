import { useState } from "react";

export const useForm = (forminicial = {}) => {
    const [formState, setFormState] = useState(forminicial)

    const onInputChange = ({target}) => {
        const {name, value} = target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(forminicial)
    }

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}