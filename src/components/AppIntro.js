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
      title:'VirPet 日曆',
      description: '充實每一天',
      img: require('../images/calen.png'),
      imgStyle: {
        height: 93 * 1.5,
        width: 103 * 1.5,
      },
      backgroundColor: '#cbd4e2',
      fontColor: '#fff',
      level: 10,
    }, {
      title: '擁有小助手',
      description: '擁有助手在你的行事曆',
      img: require('../images/dog.png'),
      imgStyle: {
        height: 93 * 1.5,
        width: 103 * 1.5,
      },
      backgroundColor: '#cbd4e2',
      fontColor: '#fff',
      level: 10,
    }, {
      title: '更換主題',
      description: '讓你的行事曆與眾不同',
      img: require('../images/pencils.png'),
      imgStyle: {
        height: 93 * 1.4,
        width: 103 * 1.4,
      },
      backgroundColor: '#cbd4e2',
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
