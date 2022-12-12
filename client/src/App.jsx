import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css';
import rootReducer from "./reducers";

import Header from "./components/Header";
import Body from "./components/Body";

import {configureStore} from "@reduxjs/toolkit";
import { Provider, connect } from "react-redux";

export const store = configureStore({
    reducer: rootReducer
});

export default function App(props) {
    return (
        <Provider store={store}>
            <div className="app">
                <Header />
                <Body />
            </div>
        </Provider>
    );
}
