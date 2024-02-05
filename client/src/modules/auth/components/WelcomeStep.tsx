import { Button } from '@chakra-ui/react'
import Logo from 'icons/Logo'
import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

const WelcomeStep = ({back, next}: any) => {
  return (
    <div
    className='
    relative
    grid place-content-center
    flex-1
    bg-violet-500
    '
    >
      <Logo/>
              

      <div
      className='
      grid place-content-center #bg-red-500
      absolute bottom-20 left-0 right-0
      mx-auto w-full
      '
      >
        <Button
        rightIcon={<HiArrowLongRight size={24}/>}
        borderRadius={'9999px'}
        
        onClick={next}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default WelcomeStep