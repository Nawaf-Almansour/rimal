// import React from 'react'
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/styles.scss"
import App, { Container, NextAppContext } from "next/app";
import auth0 from '../services/auth0';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.

  
  static async getInitialProps({ Component, router, ctx }) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
      let pageProps = {};
      const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
      const isSiteOwner = user && user[process.env.NAMESPACE + '/role'] === 'siteOwner';
      const auth = { user, isAuthenticated: !!user, isSiteOwner };
       console.log(`auth: ${auth}`);
              console.log(`user: ${user}`);

    return {pageProps,auth}
    
  }

  render() {
        const { Component, pageProps, auth } = this.props

    return (
          <Container>
              <Component {...pageProps} auth={auth} />
          </Container>
    );
  }
}

export default MyApp