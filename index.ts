import { createSlice, PayloadAction, createAction, Draft } from "@reduxjs/toolkit";
import { createMySlice } from './types';

interface ST  {
    a: string,
    b: number;
    c: boolean;
    d: {
        hello: string;
    }
}

const initialState: ST = {
    a: 'hello',
    b: 3,
    c: false,
    d: {
        hello: 'world'
    }
}

const slice = createSlice({
    name: "slice",
    initialState,
    reducers: {
        setA: (state) => {
            state.a = 'asdf';
        },
        setB: (state) => {
            state.b = 5;
        }
    }
});


export const actions = slice.actions;
export const reducer = slice.reducer;
export const setB = slice.actions.setB;

export const myslice = createMySlice(
    initialState,
    {
        setA: (state) => {
            state.a = 'asdf';
        },
        setB: (state) => {
            state.b = 5;
        }
    }
)