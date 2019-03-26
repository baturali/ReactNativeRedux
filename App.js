/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { fetchAllCurrencies } from './actions';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Badge, Spinner, Drawer } from 'native-base';
import SideBar from './components/SideBar.js'

class App extends Component {
  componentWillMount() {
    this.props.onFetch();
  }
  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    return (
      <Container>
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar navigator={this.navigator} />}
          panOpenMask={0.80}
        captureGestures="open" >
          <Header>
            <Left>
              <Button transparent onPress={() => openDrawer()}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Spinner color='red' />
            <Text>
              {JSON.stringify(this.props.currencies)}
            </Text>
          </Content>
          <Footer>
            <FooterTab>
              <Button badge vertical>
                <Badge><Text>2</Text></Badge>
                <Icon name="apps" />
                <Text>Apps</Text>
              </Button>
              <Button vertical>
                <Icon name="camera" />
                <Text>Camera</Text>
              </Button>
              <Button active badge vertical>
                <Badge ><Text>51</Text></Badge>
                <Icon active name="navigate" />
                <Text>Navigate</Text>
              </Button>
              <Button vertical>
                <Icon name="person" />
                <Text>Contact</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Drawer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = state => {
  return {
    currencies: state.currencies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetch: () => {
      dispatch(fetchAllCurrencies());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)