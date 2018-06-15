import * as PostsConstants from '../constants/postsConstants';
export function postsReducer(state = {posts: [], quantityPosts: 0, is_fetching: false}, action) {
    switch (action.type){
        case PostsConstants.FETCH_POSTS_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }

        case PostsConstants.FETCH_POSTS_FULFILLED: {
            state = {...state, is_fetching: false, posts: action.payload.data.posts, quantityPosts: action.payload.data.quantityPosts};
            break;
        }

        case PostsConstants.FETCH_POSTS_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }
    }
    return state;
}