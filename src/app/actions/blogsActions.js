import {FETCH_BLOGS} from "../constants/blogsConstants";
import AjaxRequest from "../services/AjaxRequest";

export function fetchBlogs(startIndex, limit) {
    let url = '/api/blogs';

    return {
        type: FETCH_BLOGS,
        payload: new AjaxRequest().send(url, null, {startIndex: startIndex, limit: limit})
    }
}