import { createReducer, on } from "@ngrx/store";
import { Sidenav } from "../models/app-state";
import { sidenavAutoSave, sidenavClick, sidenavSave, sidenavSearch } from "./side-nav.action";

export const initialState: Sidenav = {
    numberOfClicks: 0,
    numberOfSaves: 0,
    numberOfSearches: 0
};

const _sidenavReducer = createReducer(initialState,
    on(sidenavClick, state => {
        return { ...state, numberOfClicks: state.numberOfClicks + 1 }
    }),
    on(sidenavSave, sidenavAutoSave, state => {
        return { ...state, numberOfSaves: state.numberOfSaves + 1 }
    }),
    on(sidenavSearch, state => {
        return { ...state, numberOfSearches: state.numberOfSearches + 1 }
    })
);

export function SidenavReducer(state: Sidenav | undefined, action: any) {
    return _sidenavReducer(state, action)
}
