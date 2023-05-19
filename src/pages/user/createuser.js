import { useState, useMemo } from "react"
import { useForm } from "react-hook-form";


export const CreateUser = ({ data, setData }) => {
    const { register, handleSubmit } = useForm();
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [email, setEmail] = useState();
    const [status, setStatus] = useState();
    const handleName = (e) => { setName(e.target.value) }
    const handleEmail = (m) => { setEmail(m.target.value) }
    const handleGender = (a) => { setGender(a.target.value) }
    const handleStatus = (p) => { setStatus(p.target.value) }
    const onSubmit = () => {
        if (name !== '' && gender !== '' && email !== '' && status !== '') {
            setData([...data, {
                id: Math.random(),
                name: name,
                gender: gender,
                email: email,
                status: status
            }])
        }
        setName('')
        setGender('')
        setEmail('')
        setStatus('')
    }

    const memo = useMemo(() => onSubmit(), [])

    return (
        <>
            <div className="input-new-user">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Create New User</h2>
                    <input className="inp-ut" type="text"   {...register("name", { required: true, maxLength: 20 })} placeholder="Name" onChange={handleName} value={name} />
                    <input className="inp-ut" type="email"  {...register("email", { min: 18, max: 99 })} placeholder="Email" onChange={handleEmail} value={email} />
                    <input className="inp-ut" type="text"  {...register('gender')} placeholder="Gender" onChange={handleGender} value={gender} />
                    <input className="inp-ut" type="text"  {...register('status')} placeholder="Status" onChange={handleStatus} value={status} />

                    <button type="submit" className="addBut" >Add new User</button>
                </form>

            </div>

        </>
    )
}