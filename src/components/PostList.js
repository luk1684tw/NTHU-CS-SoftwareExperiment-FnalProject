import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    ListView, Text, Image
} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import {Left,Right,Body, List, ListItem, Container, Content, Icon} from 'native-base';
import PostItem from './PostItem';
import CalendarStrip from 'react-native-calendar-strip';
import {connect} from 'react-redux';
import {listPosts, listMorePosts} from '../states/post-actions';
import CheckBox from './CheckBox.js';

class PostList extends React.Component {
    static propTypes = {
        searchText: PropTypes.string.isRequired,
        listingPosts: PropTypes.bool.isRequired,
        listingMorePosts: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        events: PropTypes.array.isRequired,
        hasMorePosts: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            checked: false
        };
        console.log(this.props.duration);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleLoadMore = this.handleLoadMore.bind(this);
        // this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(listPosts(this.props.searchText));
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        const {listingPosts, hasMorePosts, events} = this.props;
        const {checked} = this.state;
        console.log('checked:',checked);
        return (

          <Container style={styles.mission}>

              <Content>
                <List dataArray={events}
                    renderRow={(event) =>
                    <View>
                        <ListItem itemHeader first >
                            <Icon name='bell-ring' />
                            <Text>{event.Group}</Text>
                            <CheckBox/>
                        </ListItem>
                        <ListItem>
                            <Text>{event.StartDate}-{event.EndDate}{'   '}</Text>
                            {/* <Text>{event.Title} {' Group: '+event.Group}</Text> */}
                            {/* <CheckBox checked={false} /> */}
                            <Text>{event.Description}</Text>
                        </ListItem>
                    </View>
                    }>
                </List>
              </Content>
          </Container>
        )
    }

    handleRefresh() {
        const {dispatch, searchText} = this.props;
        dispatch(listPosts(searchText));
    }

    handleLoadMore() {
        const {listingMorePosts, dispatch, events, searchText} = this.props;
        const start = events[events.length - 1].id;
        if (listingMorePosts !== start)
            dispatch(listMorePosts(searchText, start));
    }

    // handleCheckBoxClick() {
    //     this.setState(previousState => {
    //         console.log('previousState:',previousState);
    //         return {
    //             checkbox: !previousState.checkbox
    //     }});
    //
    // }
}
const styles = {
    mission: {
        margin: 30,
        height: 30,
        opacity: 0.8
    }
}
export default connect((state, ownProps) => ({
    searchText: state.search.searchText,
    listingPosts: state.post.listingPosts,
    listingMorePosts: state.post.listingMorePosts,
    events: state.post.events,
    hasMorePosts: state.post.hasMore
}))(PostList);
