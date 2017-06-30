
import React, { Component } from 'react';
import {Image, ListView, TouchableOpacity} from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, Left, Thumbnail} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import styles from '../styles';

var URL="http://mhs.rey1024.com/1415051034/vendor.php";

export default class Spa extends Component { // eslint-disable-line

    constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
       dataSource: ds,
       results: []
    };
  }

  dataVendor() {
    fetch(URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows
        (responseData),
      });
    }) .done();
  }

    renderRow(record) {
    return (
      <Card>
      <CardItem>
        <Left>
          <Thumbnail source={require('./../../../../images/logo.png')} />
            <Body>
              <Text>{record.nama}</Text>
            </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image size={80} maxHeight={200} source={require('./../../../../images/resort-spa.jpg')}/>
      </CardItem>
      <CardItem>
        <Text>{record.nama}</Text>
      </CardItem>
      </Card>
    );
  }

  render() { // eslint-disable-line
        this.dataVendor();
    return (
      <Content padder style={{ marginTop: 0 }}>
          <Grid style={styles.mt}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => this.newPage(i)}
                >
                  <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    animate
                    />
                </TouchableOpacity>
          </Grid>
      </Content>
    );
  }
}
