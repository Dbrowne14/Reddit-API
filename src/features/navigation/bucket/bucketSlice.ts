import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    selectedBucket: string
}

const initialState: InitialState = {
    selectedBucket: 'ImaginaryLandscapes'
}

export const bucketSlice = createSlice({
    name: 'bucket',
    initialState,
    reducers: {
        setBucket: (state, action) => {
            state.selectedBucket = action.payload
        }
    }
})

export const {setBucket} = bucketSlice.actions;