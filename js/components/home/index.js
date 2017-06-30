
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Text, Button, Icon, Tabs, Tab, Right, Left, Body, TabHeading} from 'native-base';
import { Actions } from 'react-native-router-flux';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

import Restoran from './screen/restoran';
import Spa from './screen/spa';
import Hotel from './screen/hotel';

class Home extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
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
            <Title>{(this.props.name) ? this.props.name : 'Balibook'}</Title>
          </Body>

          <Right>
          </Right>
        </Header>

        <Tabs>
          <Tab heading={<TabHeading><Text>Restoran</Text></TabHeading>}>
            <Restoran />
          </Tab>
          <Tab heading={<TabHeading><Text>Spa</Text></TabHeading>}>
            <Spa />
          </Tab>
          <Tab heading={<TabHeading><Text>Hotel</Text></TabHeading>}>
            <Hotel />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(Home);
