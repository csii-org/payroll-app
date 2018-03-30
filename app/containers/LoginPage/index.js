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
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Background from '../../assets/img/bg3.jpg';

export default class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="wrapper wrapper-full-page ps">
        <div className="full-page section-image">
          <div className="full-page-content">
            <div className="login-page">
              <div className="container">
                <div className="ml-auto mr-auto col-12 col-md-8 col-lg-4">
                  <Form>
                    <div className="card-login card-plain card">
                      <div className="card-header"></div>
                      <div className="card-body">
                        <FormGroup>
                          <Label for="loginUser">Username</Label>
                          <Input type="text" name="user" id="loginUser" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="loginPassword">Password</Label>
                          <Input type="password" name="password" id="loginPassword" />
                        </FormGroup>
                      </div>
                      <Button>Submit</Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
            <div className="full-page-background" style={{ backgroundImage: `url(${Background})` }}></div>
          </div>
        </div>
      </div>
    );
  }
}
