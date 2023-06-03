import React from 'react'
import Signin from './Signin'
import Signup from './Singup'
import AuthDetails from './AuthDetails'

const manage = () => {
  return (
    <div className='flex-col items-center bg-amazonclone-background h-100'>
      <div className='grid gap-4 grid-cols-2 w-full h-3/4 border-black'>
        <Signin/>
        <Signup/>
      </div>
      <AuthDetails/>
    </div>
  )
}

export default manage
