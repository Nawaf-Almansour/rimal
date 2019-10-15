import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/styles.css"

export default class Index extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {

     return (
         <BaseLayout>
            <h1> Hello... </h1>
<Button color="primary" size="lg" block>Block level button</Button>
         </BaseLayout>
    );
  }
}
