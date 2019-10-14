import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import Link from 'next/Link';

export default class portfolios extends Component {
  
  static async getInitialProps() {
    let posts = [];
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = response.data;
      // console.log(`posts ${posts}`);
    } catch (err) {
      console.error(`portfolios -> ${err}`);
    }

    return {posts: posts.splice(0, 10)} ;
  }
  
  renderPosts(posts){
    return posts.map((post, index) => {
      return (
        <li Key={index}> <Link as={`/portfolio/${post.id} `} href ="/portfolio/[id]">
              <a> {post.title} </a> 
            </Link> 
        </li>
      )
    })
  }

  render() {
  const {posts} = this.props;
    return (
         <BaseLayout>
            <h1> Hello... portfolios </h1>
            <ul>
             { this.renderPosts(posts) }
            </ul>
         </BaseLayout>
    )
  }
}
