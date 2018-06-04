import * as BlogsConstants from '../constants/blogsConstants';
export function blogsReducer(state = {blogs: [], quantityBlogs:0, is_fetching: false}, action) {
    switch (action.type){
        case BlogsConstants.FETCH_BLOGS_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }

        case BlogsConstants.FETCH_BLOGS_FULFILLED: {
            state = {...state, is_fetching: false, blogs: action.payload.data.blogs, quantityBlogs: action.payload.data.quantityBlogs};
            break;
        }

        case BlogsConstants.FETCH_BLOGS_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }
    }
    return state;
}