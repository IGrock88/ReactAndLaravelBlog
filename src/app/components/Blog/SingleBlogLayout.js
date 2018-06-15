import React from 'react';
import Pagination from 'react-js-pagination';
import BlogItem from "./BlogItem";
import LoadingAnimation from "../global/LoadingAnimation";
import PostList from "./PostList";
import {fetchPosts} from "../../actions/postsActions";
import {connect} from "react-redux";
import {fetchBlog} from "../../actions/singleBlogActions";

const LIMIT_POSTS_ON_PAGE = 5;
const DEFAULT_ACTIVE_PAGE = 1;
class SingleBlogLayout extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activePage: DEFAULT_ACTIVE_PAGE
        };
        this.props.dispatch(fetchBlog(this.props.idBlog));
        this.props.dispatch(fetchPosts(this.props.idBlog, (this.state.activePage - 1) * LIMIT_POSTS_ON_PAGE, LIMIT_POSTS_ON_PAGE));
    }

    handlePageChange = (pageNumber) => {
        this.setState({activePage: pageNumber});
        this.props.dispatch(fetchPosts(this.props.idBlog, (pageNumber - 1) * LIMIT_POSTS_ON_PAGE, LIMIT_POSTS_ON_PAGE));
    };

    render() {
        return (
            <div>


                {this.props.is_fetching_blog || this.props.is_fetching_posts ?
                    <LoadingAnimation/> : <div>

                        <BlogItem blogs={this.props.blog}/>
                        {this.props.quantityPosts !== 0 ?                         <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={LIMIT_POSTS_ON_PAGE}
                            totalItemsCount={this.props.quantityPosts}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                        /> : null}
                        <PostList posts={this.props.posts}/>
                    </div>}
             </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        posts: store.posts.posts,
        quantityPosts: store.posts.quantityPosts,
        blog: store.blog.blog,
        is_fetching_posts: store.posts.is_fetching,
        is_fetching_blog: store.blog.is_fetching
    };
}

export default connect(mapStateToProps)(SingleBlogLayout);