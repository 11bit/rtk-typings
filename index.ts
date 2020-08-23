import { createSlice, PayloadAction, createAction, Draft } from "@reduxjs/toolkit";

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

export const slice = createSlice({
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


