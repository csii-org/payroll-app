/*
 * LoginPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, CardLink, CardImg, Container, Col, Form } from 'reactstrap';
import PerfectScrollbar from 'perfect-scrollbar';

import { Button, FormInputs } from 'components';

import bgImage from 'assets/img/bg14.jpg';
import logoImage from 'assets/img/csi_logo.jpg';

export default class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {};
    this.fullPages = React.createRef();
  }
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      this.ps = new PerfectScrollbar(this.fullPages);
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      this.ps.destroy();
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper wrapper-full-page" ref={this.fullPages}>
          <div className="full-page section-image">
            <div className="full-page-content">
              <div className="login-page">
                <Container>
                  <Col xs={12} md={8} lg={4} className="ml-auto mr-auto">
                    <Card className="card-login text-center">
                      <CardHeader>
                        <CardImg className="w-50 p-3" src={logoImage} alt="LOGO" />
                      </CardHeader>
                      <CardBody className="text-left">
                        <Form>
                          <FormInputs
                            ncols={['col-12', 'col-12']}
                            proprieties={[
                              {
                                label: 'Username',
                                inputProps: {
                                  type: 'text',
                                },
                              },
                              {
                                label: 'Password',
                                inputProps: {
                                  type: 'password',
                                },
                              },
                            ]}
                          />
                        </Form>
                      </CardBody>
                      <CardFooter className="text-right">
                        <CardLink color="info" className="pull-left" href="#">Forgot Password?</CardLink>
                        <Button color="primary" size="lg" href="#">
                          Sign In
                          </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                </Container>
              </div>
            </div>
            <div className="full-page-background" style={{ backgroundImage: `url(${bgImage})` }}></div>
          </div>
        </div>
      </div>
    );
  }
}
