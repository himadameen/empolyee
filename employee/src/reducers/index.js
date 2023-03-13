import { configureStore } from '@reduxjs/toolkit'
import employeeDetail from './reducer'


export default configureStore({
  reducer: employeeDetail
})