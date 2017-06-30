import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.google.co.id/maps/@-8.6550627,115.24892,204m/data=!3m1!1e3?hl=en'}}
      />
    );
  }
}

export default MyWeb;