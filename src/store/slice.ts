import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'
import { SortField,SortOrder } from '@/type'

// Define a type for the slice state
interface ProductFilterState{
  sortField:SortField
  sortOrder:SortOrder
  currentPage:number
}

// Define the initial state using that type
const initialState: ProductFilterState = {
  sortField:'default',
  sortOrder:'asc',
  currentPage:1,
}

export const productFiltersSlice = createSlice({
  name: 'productFilters',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSortField(state,action:PayloadAction<SortField>){
      state.sortField=action.payload
    },
    setSortOrder(state,action:PayloadAction<SortOrder>){
      state.sortOrder=action.payload
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage= action.payload
    },
    setSort(state,action:PayloadAction<{field:SortField;order:SortOrder}>){
      state.sortField = action.payload.field;
      state.sortOrder = action.payload.order;
      state.currentPage = 1; //reset page while sort change
    }
  }
})

export const { setSortField, setSortOrder, setCurrentPage,setSort } = productFiltersSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export const productFilterReducer = productFiltersSlice.reducer;