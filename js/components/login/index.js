
import React, { Component, PropTypes } from 'react';
import { Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Item, Input, Button, Icon, View, Text } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';

import { setUser } from '../../actions/user';
import styles from './styles';

var URL = "http://mhs.rey1024.com/1415051034/login.php";

const background = require('./../../../images/shadow.png');

class Login extends Component {

  // static propTypes = {
  //   setUser: React.PropTypes.func,
  // }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  // setUser(name) {
  //   this.props.setUser(name);
  // }

  login() {
    if (this.state.username == '') {
      Alert.alert(
        'Error',
        'Username Cannot Be Empty!',
      );
      return;
    }
    if (this.state.password == '') {
      Alert.alert(
        'Error',
        'Password Cannot be Empty!',
      );
    return;
    } else {
    fetch(URL + '?username='+this.state.username+'&password='+this.state.password+"")
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        console.log(id);
        if (id === -1) {
          Alert.alert(
            'Error',
            'Invalid Username or Password!',
          );
          ActionConst.RESET;
        }else{
        Actions.home();
        }   
      })
    .done();
    }
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}/>
              <View style={styles.bg}>
                <Item style={styles.input}>
                  <Icon active name="person" />
                  <Input 
                    placeholder="USERNAME" 
                    text = {this.state.username}
                    onChangeText={(e) => this.setState({ username: e })} 
                  />
                </Item>
                <Item style={styles.input}>
                  <Icon name="unlock" />
                  <Input
                    placeholder="PASSWORD"
                    secureTextEntry
                    text = {this.state.password}
                    onChangeText={(e) => this.setState({ password: e })}
                  />
                </Item>
                <Button style={styles.btn} onPress={() => this.login()}>
                  <Text>Login</Text>
                </Button>
              </View>
          </Content>
        </View>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    setUser: username => dispatch(setUser(username)),
  };
}


export default connect(null, bindActions)(Login);
