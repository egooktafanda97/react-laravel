import React, { Component, useEffect, useState, useContext } from "react";
import {
    HashRouter,
    Router,
    Route,
    Link,
    Switch,
    useHistory,
    useLocation,
} from "react-router-dom";

export default function router() {
    return (
        <Switch>
            <Route exact path="/">
                <h3>okkkee</h3>
            </Route>
        </Switch>
    );
}
