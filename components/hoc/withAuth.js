import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

export default role => Component =>
  class withAuth extends React.Component {

  static async getInitialProps(args) {
    const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);

    return { ...pageProps };
  }

  renderProtectedPage() {
    const { isAuthenticated, user } = this.props.auth;
    const userRole = user && user[`${process.env.NAMESPACE}/role`];
    let isAuthorized = false;

    if (role) {
      if (userRole && userRole === role) { isAuthorized = true };
    } else {
      isAuthorized = true;
    }

    if (!isAuthenticated) {
      return (
        <BaseLayout {...this.props.auth}>
          <BasePage>
            <h1> You are not authenticated. Please Login to access this page. </h1>
          </BasePage>
        </BaseLayout>
      )
    } else if (!isAuthorized) {
      return (
        <BaseLayout {...this.props.auth}>
          <BasePage>
            <h1> You are not authorized. You dont have a permission to visit this page </h1>
          </BasePage>
        </BaseLayout>
      )
    } else {
      return ( <Component {...this.props} />)
    }
  }

  render() {
    return this.renderProtectedPage()
  }
}

//mongodb+srv://<username>:<password>@cluster0-gilob.mongodb.net/test?retryWrites=true&w=majority

//mongodb+srv://Test:TestTest@cluster0-gilob.mongodb.net/test?retryWrites=true&w=majority

// Your unique External ID: a45c2896 - 514 b - 4 aaa - abf3 - cd8856b2af60
// Atlas AWS IAM User ARN: arn: aws: iam::962727799805: user / atlas - data - lake

