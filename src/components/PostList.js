import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    ListView, Text, Image, TouchableOpacity
} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import {Left,Right,Body, List, ListItem, Container, Content, Icon, Button, CheckBox} from 'native-base';
import PostItem from './PostItem';
import CalendarStrip from 'react-native-calendar-strip';
import {connect} from 'react-redux';
import {listEvents, doneEvent} from '../states/event-actions';
// import CheckBox from './CheckBox.js';
import Timeline from 'react-native-timeline-listview';
class PostList extends React.Component {
    static propTypes = {
        searchText: PropTypes.string.isRequired,
        events: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.renderDetail=this.renderDetail.bind(this);
        this.handleComplete=this.handleComplete.bind(this);
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
    handleComplete(isDone, id){
        console.log('In here', isDone, id);
        if(isDone===false)
            this.props.dispatch(doneEvent(id));
    }
    renderDetail(rowData, sectionID, rowID) {
    let title = <Text style={styles.title} >{rowData.title}</Text>
    var desc = null
    // if(rowData.description && rowData.imageUrl)
      desc = (
        <View style={styles.descriptionContainer}>
          {/* <Image source={{uri: rowData.imageUrl}} style={styles.image}/> */}
          <Text style={styles.textDescription}>{rowData.description}</Text>
        </View>
        );

    return (
      <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
        {title}
        {/* <TouchableOpacity onPress={this.handleComplete(rowData.isDone, rowData.id)}>
            {(rowData.isDone===false)?<CheckBox checked={false} />:<CheckBox checked={true} />}
        </TouchableOpacity> */}
        {/* 註解一的會一直listEvent 會lag */}

        {/* {title}<CheckBox id={rowData.id} isDone={rowData.isDone}/> */}
        {/* 註解二的是怎麼案都沒有反應QQ */}
        {desc}
      </View>
    )
  }
    render() {
        const {events} = this.props;
        const data = [
            {time: '08:00', title: 'facebook Login'},
            {time: '09:00', title: 'ffff'}
        ];
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
                    renderDetail={this.renderDetail}
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
    },
    container: {
        flex: 1,
        padding: 20,
        paddingTop:65,
        backgroundColor:'white'
    },
    list: {
        flex: 1,
        marginTop:20,
    },
    title:{
        fontSize:16,
        fontWeight: 'bold',
        flex: 1,
        justifyContent: 'flex-start'
    },
    descriptionContainer:{
        flexDirection: 'row',
        paddingRight: 50
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textDescription: {
        marginLeft: 10,
        color: 'gray'
    }
}
export default connect((state, ownProps) => ({
    searchText: state.search.searchText,
    listingPosts: state.post.listingPosts,
    listingMorePosts: state.post.listingMorePosts,
    events: state.event.events,
    hasMorePosts: state.post.hasMore
}))(PostList);
