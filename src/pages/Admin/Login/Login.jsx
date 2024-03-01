import React from 'react'
import Wrapper from '../Wrapper'
import { Helmet } from 'react-helmet-async'
const Login = () => {
  return (
    <>
    <Helmet>
        <title>Login</title>
        <meta name='Login' content='Beginner Login.' />
      </Helmet>
      <Wrapper>
        <h1>Login</h1>
      </Wrapper>
    </>
  )
}

export default Login