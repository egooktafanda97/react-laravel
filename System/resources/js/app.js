/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");
require("./bootstrap");
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
const {
    base_urlDev,
    base_url,
    status,
    subForlderDev,
} = require("./config/compile");
import Router from "./router/router";

ReactDOM.render(
    <BrowserRouter basename={`${status == "dev" ? subForlderDev : ""}`}>
        <Router />
    </BrowserRouter>,
    document.getElementById("root")
);
