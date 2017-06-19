import React, { Component } from 'react';
import { AppRegistry, Alert } from 'react-native';
import AppIntro from 'react-native-app-intro';

export default class Intro extends React.Component {
  onSkipBtnHandle = (index) => {
        this.props.navigation.navigate('Today');
  }
  doneBtnHandle = () => {
        this.props.navigation.navigate('Today');
  }
  nextBtnHandle = (index) => {

  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }
  render() {
    const pageArray = [{
      title: 'Page 1',
      description: 'Description 1',

      backgroundColor: '#a8c7f5',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Page 2',
      description: 'Description 2',

      backgroundColor: '#a8c7f5',
      fontColor: '#fff',
      level: 10,
    }];
    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
      />
    );
  }
}

AppRegistry.registerComponent('Intro', () => Intro);
