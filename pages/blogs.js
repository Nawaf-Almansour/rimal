import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from "../components/BasePage";

export default class blogs extends Component {
  render() {
    return (
        <BaseLayout title="blog" {...this.props.auth}>

            <BasePage>
                <h1> Hello... blogs </h1>
            </BasePage>
         </BaseLayout>
    )
  }
}
