
import React, { Component } from 'react';
import
{
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import Layout from "./components/Layout";


import EventListingView from "./views/EventListingView";
import EventView from "./views/EventView";
import StartMake from "./views/StartMake";
import StartView from "./views/StartView";
import TestView from "./views/TestView";

VIEWS = [
  EventListingView,
  EventView,
  StartMake,
  StartView
];

export default class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      view: StartMake
    };
  }

  render()
  {
    return (
      ///*
      <Layout onBackButton={ this.handleBackButton }>
        <this.state.view />
      </Layout>
      //*/
      //<TestView />
    );
  };

  handleBackButton = () =>
  {
    switch (this.state.view)
    {
      case EventView:
        this.setState({
          view: EventListingView
        });
        break;
      case StartMake:
        this.setState({
          view: EventView
        });
        break;
      case StartView:
        this.setState({
          view: EventView
        });
        break;
      default:
        break;
    }
    console.log("fuck");
  };
};

const styles = StyleSheet.create({

});




