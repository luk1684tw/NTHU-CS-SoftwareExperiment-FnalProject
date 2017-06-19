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
import {listEvents} from '../states/event-actions';
import CheckBox from './CheckBox.js';
import Timeline from 'react-native-timeline-listview';
class PostList extends React.Component {
    static propTypes = {
        searchText: PropTypes.string.isRequired,
        events: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        console.log(this.props.duration);
    }

    componentDidMount() {
        this.props.dispatch(listEvents());
    }
    componentWillReceiveProps(nextProps) {
        // if(nextProps.events !==this.props.events){
        //     this.props.dispatch(listEvents());
        // }
    }
    render() {
        const {events} = this.props;
        console.log('In PostList:',this.props);
        return (

          <Container style={styles.mission}>

              <Content>

                <Timeline
                    data={events}
                    innerCircle={'dot'}
                    circleSize={20}
                    circleColor='rgb(45,156,219)'
                    lineColor='rgb(45,156,219)'
                    timeContainerStyle={{minWidth:52, marginTop: 1}}
                    timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
                    descriptionStyle={{color:'gray'}}
                    options={{
                        style:{paddingTop:5}
                    }}
                />
              </Content>
          </Container>
        )
    }

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
    events: state.event.events,
    hasMorePosts: state.post.hasMore
}))(PostList);
