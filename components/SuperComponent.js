import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
export default class SuperComponent extends Component {
    constructor(props) {
         super(props);
        this.someVariable = "just some";
        
    }
    alertName(title) {
        alert(title);
    }
    render() {
        return (
         <BaseLayout>

                
         </BaseLayout>

        )
    }
}
