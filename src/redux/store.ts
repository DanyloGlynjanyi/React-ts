import {configureStore} from "@reduxjs/toolkit";
import {authReducer, loadingReducer} from "./slices";


const store = configureStore({
    reducer: {
        loadingReducer,
        auth:authReducer
    }
});
export {
    store
}