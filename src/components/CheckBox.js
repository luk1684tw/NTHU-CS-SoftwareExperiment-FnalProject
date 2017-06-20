import React from 'react';
import {CheckBox} from 'react-native-elements';
import {Container , Content} from 'native-base';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {finishEvent} from '../states/event-actions'
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
        console.log('In here');
        if(this.props.isDone===false)
            this.props.dispatch(finishEvent(this.props.id));
    }
    render () {
        return (
            <CheckBox
                containerStyle={styles.checkbox}
                center
                checkedColor='red'
                uncheckedColor='black'
                checked={this.state.checked}
                onPress={()=> this.setState({checked: !this.state.checked})}
            />
        );
    }
}
const styles={
    checkbox:{
        backgroundColor:'transparent',
        border:0,
        position:'absolute',
        // marginTop: -10
        margin: 0,
        borderWidth :0
    }
}
export default connect((state, ownProps) => ({
}))(CheckBox);
