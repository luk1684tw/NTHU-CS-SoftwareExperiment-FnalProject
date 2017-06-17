import {
    listPosts as listPostsFromApi,
    createPost as createPostFromApi,
    createVote as createVoteFromApi
} from '../api/posts.js';

/*  Posts */

function startListEvents() {
    return {
        type: '@EVENT/START_LIST_EVENTS'
    };
}

function endListEvents(events) {
    return {
        type: '@EVENT/END_LIST_EVENTS',
        events
    };
}

function startListMoreEvents(start) {
    return {
        type: '@EVENT/START_LIST_MORE_EVENTS',
        start
    };
}

function endListMoreEvents(events) {
    return {
        type: '@EVENT/END_LIST_MORE_EVENTS',
        events
    };
}

function startCreateEvent() {
    return {
        type: '@EVENT/START_CREATE_EVENT'
    };
}

function endCreateEvent(event) {
    return {
        type: '@EVENT/END_CREATE_EVENT',
        event
    };
}


export function listEvents(searchText) {
    return (dispatch, getState) => {
        dispatch(startListPosts());
        return listPostsFromApi(searchText).then(posts => {
            dispatch(endListPosts(posts));
        }).catch(err => {
            dispatch(endListPosts());
            console.error('Error listing posts', err);
        });
    };
};

export function listMorePosts(searchText, start) {
    return (dispatch, getState) => {
        dispatch(startListMorePosts(start));
        return listPostsFromApi(searchText, start).then(posts => {
            dispatch(endListMorePosts(posts));
        }).catch(err => {
            dispatch(endListMorePosts());
            console.error('Error listing more posts', err);
        });
    };
};

export function createPost(mood, text) {
    return (dispatch, getState) => {
        dispatch(startCreatePost());

        return createPostFromApi(mood, text).then(post => {
            dispatch(endCreatePost(post));
        }).catch(err => {
            dispatch(endCreatePost())
            console.error('Error creating post', err);
        });
    };
};
