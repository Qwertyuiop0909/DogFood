import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers/rootReducer'
import { initState } from './initState'

export const store = configureStore(rootReducer, initState)

store.subscribe(() => console.log(store.getState()))
