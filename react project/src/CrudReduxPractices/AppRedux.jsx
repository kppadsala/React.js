import React from 'react'
import Home from './Home'
import { Provider } from 'react-redux'
import { Store } from './Redux/store'

export default function AppRedux() {
  return (
    <div className='bg-purple-200'>
      <Provider store={Store}>
      <Home/>
      </Provider>
    </div>
  )
}

