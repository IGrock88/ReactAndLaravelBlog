import {FETCH_POSTS} from "../constants/postsConstants";
import AjaxRequest from "../services/AjaxRequest";

export function fetchPosts(idBlog = null, startIndex, limit) {
    let url = '/api/posts';

    return {
        type: FETCH_POSTS,
        payload: new AjaxRequest().send(url, null, {idBlog: idBlog, startIndex: startIndex, limit: limit})
    }
}