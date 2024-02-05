import useMultiSteps from 'hooks/useMultiSteps';
import OtpStep from 'modules/auth/components/OtpStep';
import SignupStep from 'modules/auth/components/SignupStep';
import WelcomeStep from 'modules/auth/components/WelcomeStep'
import React from 'react'

const Register = () => {
  const {
    step,
    steps,
    currentIndex,
    next,
    back,
    goto,
    isFirst,
    isLast,
  } = useMultiSteps([
    {
      id: 0,
      name: 'Welcome',
      node: <WelcomeStep/>,
    },
    {
      id: 1,
      name: 'Sign up',
      node: <SignupStep/>,
    },
    {
      id: 2,
      name: 'Otp verification',
      node: <OtpStep/>,
    },
  ]);

  return (
    <main
    className='
    flex flex-col flex-1
    '
    >
      {step.node}
    </main>
  )
}

export default Register