import React from 'react'
import App from 'next/app'
import "../styles/styles.scss"
import 'bootstrap/dist/css/bootstrap.css';

class MyApp extends App {
static async getInitialProps  ({}) {
let PageProps={}

  return{PageProps}
}
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp