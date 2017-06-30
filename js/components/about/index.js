import React, { Component, PropTypes } from 'react';
import { Alert, TouchableOpacity, View, ListView, WebView, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Item, Label, Input, Form, List, ListItem, Card, CardItem} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './style';
import MyWeb from './webview';

class About extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
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
            <Title>{(this.props.name) ? this.props.name : 'Lokasi UBD'}</Title>
          </Body>  

          <Right>
          </Right>        
        </Header>
      <WebView
        source={{uri: 'https://www.google.co.id/maps/@-8.6550627,115.24892,204m/data=!3m1!1e3?hl=en'}}
      />
      </Container>
    );
  }
}


//   render() {
//     return (
//       <Container style={styles.container}>
//         <Header>
//           <Left>
//             <Button transparent onPress={this.props.openDrawer}>
//               <Icon active name="menu" />
//             </Button>
//           </Left>

//           <Body>
//             <Title>{(this.props.name) ? this.props.name : 'Lokasi UBD'}</Title>
//           </Body> 

//           <Right>
//           </Right>         
//         </Header>

//         <Content>
//           <MyWeb />
//         </Content>
//       </Container>
//     );
//   }
// }


function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(About);
