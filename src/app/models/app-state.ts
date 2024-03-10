export interface AppState {
    sidenav: Sidenav
}

export interface Sidenav {
    numberOfClicks: number;
    numberOfSaves: number;
    numberOfSearches: number;
}