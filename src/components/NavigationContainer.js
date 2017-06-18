import React from 'react';
import PropTypes from 'prop-types';

import {Container, Header, Button, Icon, Left, Right, Body, Title, Drawer} from 'native-base';
import SearchButtonWithModal from './SearchButtonWithModal';
import DrawerSideBar from './DrawerSideBar';

export default class NavigationContainer extends React.Component {
    static propTypes = {
        navigate: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);

    }

    render() {
        const {title, navigate} = this.props;
        return (
            <Drawer
                ref={(el) => this.drawer = el}
                content={<DrawerSideBar navigate={navigate} />}
                onClose={this.closeDrawer}
                tweenHandler={(ratio) => ({
                    mainOverlay: {
                        opacity: ratio,
                        backgroundColor: appColors.mask
                    }
                })}>
                <Button transparent onPress={this.openDrawer} style={{opacity:0.2}}>
                      <Icon name='menu' />
                </Button>
                {this.props.children}

            </Drawer>
        );
    }

    openDrawer() {
        this.drawer._root.open();
    }

    closeDrawer() {
        this.drawer._root.close();
    }
}
