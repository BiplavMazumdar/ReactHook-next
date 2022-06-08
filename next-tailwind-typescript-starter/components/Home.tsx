import React from 'react'
import Router, { useRouter } from 'next/router'

//Router or useRouter
export const Home = () => {
    const router = useRouter();
  return (
    <div>
        <button onClick={()=> router.push('/about')}>onClick</button>
    </div>
  )
}
