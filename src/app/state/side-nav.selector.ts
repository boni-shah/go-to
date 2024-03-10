import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Sidenav } from "./../models/app-state";

const getSidenavFeatureState = createFeatureSelector<Sidenav>('sidenav');
export const getSidenavNumberOfSavesDetails = createSelector(
    getSidenavFeatureState,
    (sidenav: Sidenav) => sidenav.numberOfSaves
);
export const getSidenavNumberOfSearchesDetails = createSelector(
    getSidenavFeatureState,
    (sidenav: Sidenav) => sidenav.numberOfSearches
);
export const getSidenavNumberOfClicksDetails = createSelector(
    getSidenavFeatureState,
    (sidenav: Sidenav) => sidenav.numberOfClicks
);

export const selector = createSelector(
    getSidenavFeatureState,
    (sidenav: Sidenav) => sidenav.numberOfClicks
);