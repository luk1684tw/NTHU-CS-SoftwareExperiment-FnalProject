import React from 'react';
import {CheckBox} from 'react-native-elements';
import {Container , Content} from 'native-base';

export default class checkBox extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            checked: false
        };
    }
    render () {
        return (
            <CheckBox
                containerStyle={{backgroundColor:'transparent',borderWidth:0,position:'absolute',right:10}}
                center
                checkedColor='red'
                uncheckedColor='black'
                checked={this.state.checked}
                onPress={()=> this.setState({checked: !this.state.checked})}
            />
        );
    }
}
