import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import {withRouter} from 'next/router';
import axios from 'axios';
class portfolio extends Component {
     static async getInitialProps({query}) {
       const testId = query.id;
         return {testId};
     }
    render() {
        const {testId} = this.props
        return (
        <BaseLayout>
        <h2>I am test page</h2>    
       <h2>{testId}</h2>     
 
        </BaseLayout>
        )
    }
}
export default withRouter(portfolio);