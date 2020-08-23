import { Action, AnyAction } from 'redux';
import { Reducer } from 'redux';
import { Draft } from "@reduxjs/toolkit";


export type SliceCaseReducers<State> = {
    [K: string]: (state: Draft<State>) => void;
};

export interface Slice<State, CaseReducers> {}

export function createMySlice<
    State,
    CaseReducers extends SliceCaseReducers<State>
>(state: State, reducers: CaseReducers ): Slice<State, CaseReducers> {
    return {}
}