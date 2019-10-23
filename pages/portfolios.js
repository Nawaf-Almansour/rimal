import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import Link from 'next/Link';
// import { Col, Row, Button } from 'reactstrap';

 class portfolios extends React.Component {
static work(){
  console.log("work static");
}
 static async getInitialProps() {
    let portfolios = [];
    console.log("try start");
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(`response ${response}`);
      portfolios = response.data;
       console.log(`posts ${portfolios}`);
    } catch (err) {
      console.log(`err `);
      console.error(`portfolios -> ${err}`);
    }

    return {portfolios: portfolios.splice(0, 10)} ;
    //  return {portfolios};
  }
  
  renderPosts(portfolios) {
    return portfolios.map((post) => {
      return (
        <li > 
            <Link as={`/portfolio/${post.id} `} href ="/portfolio/[id]">
               <a> {post.title} </a> 
            </Link> 
        </li> 
      )
    })
  }

  render() {
    console.log(this.props);
 const portfolios = this.props.portfolios;
         console.log(`render posts ${portfolios}`);

    return (
         <BaseLayout>
            <h1> Hello... portfolios </h1>
            <ul>
              { this.renderPosts(portfolios) } 
            </ul>
         </BaseLayout>
    )
  }
}
export default portfolios;