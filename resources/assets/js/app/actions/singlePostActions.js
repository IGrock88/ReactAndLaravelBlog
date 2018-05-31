import {FETCH_SINGLE_POST} from "../constants/singlePostConstants";
import AjaxRequest from "../services/AjaxRequest";

export function fetchPost(idPost) {
    let url = '/api/singlePost/' + idPost;

    return {
        type: FETCH_SINGLE_POST,
        payload: new AjaxRequest().send(url)
    }
}