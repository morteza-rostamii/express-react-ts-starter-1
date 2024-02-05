import { Button, FormControl, IconButton, Input } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form';
import useAuthStore from '../auth.store';
import LoadScreen from 'components/LoadScreen';
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";
import { FaGoogle } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiChevronLeft } from "react-icons/hi2";

const OtpStep = ({back, next, isFirst,}: any) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      code: "",
    }
  });

  const {registerAct, loading} = useAuthStore();

  const handSubmit = async (data:any) => {
    const {username, email} = data;
    

    //await registerAct({username, email});
    //next();
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
        <IconButton
        className='mb-3'
        aria-label=''
        icon={<HiChevronLeft size={20}/>}
        isRound={true}

        onClick={back}
        />
        <h1
        className='
        text-black text-xl font-bold mb-2
        '
        >
          Enter verification code
        </h1>
        <p
        className='
        text-sm text-slate-500
        '
        >
          Please check your email, we sent you a verification code.
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
              {errors.code?.type === "required" && (
                <small className='block text-red-500 font-semibold'>code is required</small>
              )}
              {errors.code?.type === "minLength" && (
                <small className='block text-red-500 font-semibold'>The code should have at least 5 characters</small>
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
          id="code" 
          placeholder='Enter your code'
          {...register('code', {
            required: true,
            validate: {
              minLength: (v:any) => v.length >= 5,
              matchPattern: (v:any) => /^[a-zA-Z0-9_]+$/.test(v),
            },
          })}
          />
        </FormControl>
        
        
        
        <Button
        borderRadius={'9999px'}
        colorScheme='purple'
        type='submit'
        >
          Login
        </Button>
      </form>

    </div>
  )
}

export default OtpStep