import { configureStore } from '@reduxjs/toolkit'
import { productFilterReducer } from './sortSlice'
import { ProductModalReducer } from './modalSlice'



export const store = configureStore({
    reducer: {
        productFilters: productFilterReducer,
        productModal:ProductModalReducer

    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch