import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from "../components/BasePage";

export default class cv extends Component {
  render() {
    return (
      
      <BaseLayout {...this.props.auth}>

                 <BasePage>
                     <h1> Hello... cv </h1>
                 </BasePage>
         </BaseLayout>
    )
  }
}
