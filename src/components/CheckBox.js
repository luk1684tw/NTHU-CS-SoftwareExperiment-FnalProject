import React from 'react';
import {CheckBox} from 'react-native-elements';
import {Container , Content} from 'native-base';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {doneEvent} from '../states/event-actions';


class checkBox extends React.Component {
    static propTypes={
        id: PropTypes.string,
        isDone: PropTypes.bool,
        dispatch: PropTypes.func
    }
    constructor(props) {
        super (props);
        this.state = {
            checked: false
        };
        this.handleComplete=this.handleComplete.bind(this);
    }
    handleComplete(){
        if(this.props.isDone===false)
            this.props.dispatch(doneEvent(this.props.id));
    }
    render () {
        return (
            <CheckBox
                containerStyle={styles.checkbox}
                center
                checkedColor='red'
                uncheckedColor='black'
                checked={this.props.isDone}
                onPress={this.handleComplete}
            />
        );
    }
}
const styles={
    checkbox:{
        backgroundColor:'transparent',
        position:'absolute',
        // marginTop: -10
        margin: 0,
        borderWidth :0
    }
}
export default connect((state, ownProps) => ({
}))(checkBox);
