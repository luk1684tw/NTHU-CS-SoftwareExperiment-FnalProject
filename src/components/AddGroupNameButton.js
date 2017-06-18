import React from 'react';
import PropTypes from 'prop-types';
import {View, Modal, Text} from 'react-native';

import {connect} from 'react-redux';
import {toggleGroupNameModal, setGroupNameText} from '../states/groupName';
import {Container,Content Header, Button, Icon, Item, Input} from 'native-base';
import appColors from '../styles/colors';

class AddGroupNameButton extends React.Component {
    static propTypes = {
        groupNameText: PropTypes.string.isRequired,
        modalToggle: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleGroupName = this.handleGroupName.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    render() {
        const {groupNameText, modalToggle} = this.props;
        return (
            <View >
                {(modalToggle==false)?
                <Icon name='tag-plus'
                    onPress={this.handleOpenModal} />
                    :
                    <Container>
                   <Content>
                       // Rounded text input box
                       <Item rounded>
                           <Input placeholder='Rounded Textbox'/>
                       </Item>
                   </Content>
               </Container> }
            </View>
        );
    }

    handleOpenModal() {
        this.props.dispatch(toggleGroupNameModal());
    }

    handleGroupName(e) {
        this.props.dispatch(setGroupNameText(e.nativeEvent.text));
        this.props.dispatch(toggleGroupNameModal());
    }

    handleClear() {
        this.props.dispatch(setGroupNameText(''));
        this.props.dispatch(toggleGroupNameModal());
    }
}

const styles = {
    header: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20
    },
};

export default connect((state, ownProps )=> ({
    groupNameText: state.groupName.groupNameText,
    modalToggle: state.groupName.modalToggle
}))(AddGroupNameButton);
