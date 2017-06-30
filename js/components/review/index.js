import React, { Component } from 'react';
import { TouchableOpacity, View, ListView, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right, List, ListItem, Thumbnail, Input, Form, Item, Label } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

var URL="http://mhs.rey1024.com/1415051034/addReview.php";
var TAMPIL_URL="http://mhs.rey1024.com/1415051034/listreview.php";

class Review extends Component {
  
  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds,
      results: [],
      review: "",
    };
  }

  review() {
    fetch(URL + '?review=' + this.state.review)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          Alert.alert("Fail to Input");
         }
         else 
       {
          Actions.review();
        }  
        
      })
      .done();
  }

  listReview() {
    fetch(TAMPIL_URL)
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
      <Card style={{ flex: 0 }}>
      <CardItem>
      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.items}>{record.review}</Text>
        </View>
      </View>
      </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="menu" />
            </Button>
          </Left>

          <Body>
            <Title>{(this.props.name) ? this.props.name : 'Tulis Review'}</Title>
          </Body>

          <Right>
          </Right>          
        </Header>

        <Content>
 		     <Form>
            <Item floatingLabel>
              <Label>Review</Label>
              <Input
                onChangeText={(e) => this.setState({ review: e })} 
                text = {this.state.review}
              />
            </Item>
            {/*<Item floatingLabel>
              <Label>Resep</Label>
              <Input onChangeText={this.onResepChange}/>
            </Item>
            <Item floatingLabel last>
              <Label>Tips</Label>
              <Input onChangeText={this.onTipsChange}/>
            </Item>*/}
          </Form>
          <Button primary style={styles.confirm} onPress={() => this.review()}><Text style={styles.saveBtn}> Simpan </Text></Button>
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
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(Review);
