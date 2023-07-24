import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    noOfCakes: 10
}

const CakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        orderCake(state,action){
            state.noOfCakes-=action.payload
        },
        restockCake(state,action){
            state.noOfCakes+=action.payload
        }
    }
});

export default CakeSlice.reducer;
export const {orderCake,restockCake} = CakeSlice.actions