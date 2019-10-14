import React, { Component } from 'react'
import BaseLayout from '../../components/layouts/BaseLayout';
import {withRouter} from 'next/router';
import axios from 'axios';
class portfolio extends Component {
     static async getInitialProps(context) {
         let post = {};
         const postId = context.query.id;
         try {
             const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
             post = response.data;
             // console.log(`posts ${posts}`);
         } catch (err) {
             console.error(`portfolios -> ${err}`);
         }

         return {post};
     }
    render() {
        const {post} = this.props;
        console.log(post);
        return (
        <BaseLayout>
        <h1>portfolio --</h1>
        <h2>{post.title}</h2>   
         <h2>{post.body}</h2>
         <p>{post.id}</p>    
 
        </BaseLayout>
        )
    }
}
export default withRouter(portfolio);