import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./user/userSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";





const persistConfig={
   key:'root',
    storage,
    version:1
}
const rootReducers = combineReducers({user:userReducer})

const persistReducers= persistReducer(persistConfig,rootReducers)
export const store = configureStore({

    reducer:persistReducers,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    })
})

export const persistore= persistStore(store)