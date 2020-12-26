import React from "react";
import App from "next/app";
import Head from "next/head";
import { StoreProvider } from "../context/store";

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <div>
                <Head>
                    <meta
                        name="description"
                        content="Ecommerce site"
                    />
                </Head>
                <StoreProvider>
                    <Component {...pageProps} />
                </StoreProvider>
            </div>
        );
    }
}
