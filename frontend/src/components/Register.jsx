import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../reduxStore/authSlice.js'
import Logo from './Logo.jsx'
import Input from './Input.jsx'


const RegisterComponent = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')
    const signup =  async (data) => {
        setError('')
        try {
            const userAccount = await authService.createAccount(data)
            if(userAccount){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(login(userData))
                    navigate('/')
                }
            }
                } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className='bg-gray-800'>
    <div className='p-4 w-full flex items-center justify-center'>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
 
 <div className='mb-2 flex justify-center'>
    <span className='inline-block w-full  max-w-[100px]'>
        <Logo width='100%' />
    </span>
 </div>
 <h2 className='text-center text-2xl font-bold
         leading-tight'> Create your account</h2>
         <p className="mt-2 text-center text-base text-black/60">
          Already have an account?
          <Link
            to="/login"
            className="font-medium text-primary transaction-all duration-200 hover:underline"
          >
            {" "}
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit(signup)} className='mt-8'>
            <div className='space-y-5'>
            <Input 
                label= "Name:"
                placeholder = "Enter your name"
                {...register('name',
                {required: true,}
                 )}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input 
                label= "Password"
                placeholder= "Enter your password"
                type="password"
                {...register("password", {required: true})} 
            />
            <button type="submit" className="w-full">Sign Up</button>
            </div>
            
        </form>
      </div>
    </div>
    </div>
  )
}

export default RegisterComponent
