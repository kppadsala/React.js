import React from 'react'
import ProductCom from './ProductCom'
import { Provider } from 'react-redux'
import { store } from './redux/app'

export default function AppRedux() {
  return (
    <div>
        <Provider store={store}>
         <ProductCom/>
         </Provider>
         </div>
  )
}

