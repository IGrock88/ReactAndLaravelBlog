import {FETCH_SINGLE_BLOG} from "../constants/singleBlogConstants";
import AjaxRequest from "../services/AjaxRequest";

export function fetchBlog(idBlog) {
    let url = '/api/singleBlog/' + idBlog;

    return {
        type: FETCH_SINGLE_BLOG,
        payload: new AjaxRequest().send(url)
    }
}