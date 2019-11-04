import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import Link from 'next/Link';
import BasePage from "../components/BasePage";
import { Col, Row, Button ,Card,CardHeader,CardBody,CardTitle ,CardText} from 'reactstrap';
// import { Link } from '../routes'

// import { Col, Row, Button } from 'reactstrap';

 class portfolios extends React.Component {
 static async getInitialProps() {
    let portfolios = [];
    console.log("try start");
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(`response ${response}`);
      portfolios = response.data;
       console.log(`posts ${portfolios}`);
    } catch (err) {
      console.error(`portfolios -> ${err}`);
    }

    return {portfolios: portfolios.splice(0, 10)} ;
    //  return {portfolios};
  }
  
  renderPortfolios(portfolios) {
    return portfolios.map((post, index) => {
      return (
     <Col md="4">
  <React.Fragment key={index}>
    <span>
      <Card className="portfolio-card">
        <CardHeader className="portfolio-card-header">Some Position {index}</CardHeader>
        <CardBody>
          <p className="portfolio-card-city"> Some Location {index} </p>
          <CardTitle className="portfolio-card-title"><a>{post.title}</a>{index}</CardTitle>
          <CardText className="portfolio-card-text">Some Description {index}</CardText>
          <div className="readMore"> </div>
        </CardBody>
      </Card>
    </span>
  </React.Fragment>
</Col>

      )
    })
  }

  render() {
    const { portfolios } = this.props;
    // const { isAuthenticated, isSiteOwner } = this.props.auth;

    return (
        <BaseLayout title="Filip Jerga - Learn About My Experience" {...this.props.auth}>
        <BasePage className="portfolio-page" title="Portfolios">
          <Row>
            { this.renderPortfolios(portfolios) }
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}
export default portfolios;
