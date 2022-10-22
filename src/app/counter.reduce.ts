import { createReducer, createSelector, on } from "@ngrx/store";
import { add, remove } from "./counter.actions";

export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(add, (state) => { return state + 1 }),
    on(remove, (state) => { return state - 1 })
)
