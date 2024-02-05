import { Button, FormControl, Input } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form';
import useAuthStore from '../auth.store';
import LoadScreen from 'components/LoadScreen';
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";
import { FaGoogle } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SignupStep = ({back, next, isFirst,}: any) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
    }
  });

  const {registerAct, loading} = useAuthStore();

  const handSubmit = async (data:any) => {
    const {username, email} = data;
    

    //await registerAct({username, email});
    next();
  }

  return (
    <div
    className='
    
    flex flex-col gap-8
    h-full #bg-green-100
    pt-20 px-4
   
    '
    >
      <div
      className='
      
      '
      >
        <h1
        className='
        text-black text-xl font-bold mb-2
        '
        >
          Signup here
        </h1>
        <p
        className='
        text-sm text-slate-500
        '
        >
          Please enter your email and we will send you a verification code.
        </p>
      </div>

      <form
      className='
      flex flex-col #flex-1 gap-4
      md:justify-between #bg-red-100
      '
      onSubmit={handleSubmit((d:any) => handSubmit(d) )}
      >
        
        <FormControl>
          <div
          className='
          flex items-center justify-between mb-1
          '
          >
            {/* <label 
            className='text-sm text-slate-700'
            htmlFor="username">
              Username
            </label> */}
            <p
            className='text-red-500 text-sm'
            >
              {errors.username?.type === "required" && (
                <small className='block text-red-500 font-semibold'>Username is required</small>
              )}
              {errors.username?.type === "minLength" && (
                <small className='block text-red-500 font-semibold'>The username should have at least 5 characters</small>
              )}

              {errors.username?.type === "matchPattern" && (
                <small className='block text-red-500 font-semibold'>Username must contain only letters, numbers and _</small>
              )}
            </p>
          </div>
          <Input 
          variant={'filled'}
          className='
          w-full rounded-md p-2
          outline-none border-2 border-slate-300
          focus:border-slate-600
          '
          id="username" 
          placeholder='Enter your username'
          {...register('username', {
            required: true,
            validate: {
              minLength: (v:any) => v.length >= 5,
              matchPattern: (v:any) => /^[a-zA-Z0-9_]+$/.test(v),
            },
          })}
          />
        </FormControl>
        
        <FormControl
        id='form-control'
        >
          <div
          className='
          flex items-center justify-between mb-1
          '
          >
            {/* <label 
            className='text-sm text-slate-700'
            htmlFor="email">
              Email
            </label> */}
            <p
            className='text-red-500 text-sm'
            >
              {errors.email?.message && (
                <small className='block text-red-500 font-semibold'>{errors.email.message + ''}</small>
              )}
            </p>
          </div>
          <Input 
          variant={'filled'}
          className='
          w-full rounded-md p-2
          outline-none border-2 border-slate-300
          focus:border-slate-600
          '
          id="email" 
          placeholder='Enter your email'
          {...register('email', {
            required: "Email is required",
            validate: {
              maxLength: (v) =>
                v.length <= 50 || "The email should have at most 50 characters",
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "Email address must be a valid address",
            },
          })}
          />

        </FormControl>
        
        <Button
        borderRadius={'9999px'}
        colorScheme='purple'
        type='submit'
        >
          Continue
        </Button>
      </form>
      
      <div
      className='#w-full mx-auto'
      >OR</div>

      <div className='w-full'>
        <Button
        width={'100%'}
        borderRadius={'9999px'}
        leftIcon={<FcGoogle size={24}/>}
        >
          Continue with Google
        </Button>
      </div>

    </div>
  )
}

export default SignupStep