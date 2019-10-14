import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

import axios from 'axios';

import SuperComponent from '../components/SuperComponent';

export default class Index extends SuperComponent {
   static async getInitialProps() {
     let userData = {};
     try { 
       const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
       userData = response.data;
     } catch(err){
       console.error(err);
     }
     
    return {initialData:[1,2,3,4],userData};
  }
  constructor(props) {
    super(props);

    this.state = {
      title: "I am title"
    }
    // this.updateTitle = this.updateTitle.bind(this);
  }
  componentDidMount(){
  }
  componentDidUpdate() {
  }

    componentWillUnmount() {
    }

  // componentWillMount() {
  //  }
  updateTitle = () => {
    this.setState({title: 'I am Updated title Page'})
  }
  render() {
       const {title} = this.state;
      //  const initialData = this.props.initialData;
       const { initialData ,userData} = this.props; 
     return (
         <BaseLayout>
            <h1> Hello... </h1>
            <h1> {title} </h1>
            <h1> {userData.title} </h1>
            <button onClick={this.updateTitle}> Change Title</button>
         </BaseLayout>
    );
  }
}
