import Header from "./Header";
import Head from "next/head";
import React from "react";

const Layout = (props) => {
    return (
        <>
            <Head>
                <title>{process.env.SITENAME}</title>
            </Head>
            <Header />
            <main>
                {props.children}
            </main>

        </>
    );
};
export default Layout;
