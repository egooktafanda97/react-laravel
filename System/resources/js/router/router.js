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

import Layout from "../Layout/Layouts";

export default function router() {
    return (
        <Switch>
            <Route exact path="/">
                <Layout>
                    <h2>ok</h2>
                </Layout>
            </Route>
        </Switch>
    );
}
