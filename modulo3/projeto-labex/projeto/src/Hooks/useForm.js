import { useState } from 'react'

const useForm = (inicialState) => {
    const [form, setForm] = useState(inicialState)

    const onChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    };

    const cleanFields = () => {
        setForm(inicialState)

    };

    return { form, onChange, cleanFields }
};

export default useForm