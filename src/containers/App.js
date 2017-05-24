import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout/Layout';
import Sample from '../components/Sample/Sample';
import Control from '../components/Control/Control';
import { test } from '../actions/color';

import '../styles/index.scss';

class App extends Component {
  componentDidMount() {
    this.props.test();
  }
  render() {
    return (
      <Layout>
        <Sample />
        <Control />
      </Layout>
    );
  }
}

export default connect(null, { test })(App);
