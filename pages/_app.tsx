import React from "react";

import App from "next/app";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Provider } from "react-redux";
import store from "../src/redux/store";

// Global styles
import "../src/styles/index.css";

export default class extends App {
    render() {
        const { Component, pageProps }: AppProps = this.props;

        return (
            <Provider store={store}>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <title>That Yisus Exclusive Limited Collection</title>
                    <link rel="icon" href="./favicon.ico" />
                </Head>

                <Component {...pageProps} />
            </Provider>
        );
    }
}