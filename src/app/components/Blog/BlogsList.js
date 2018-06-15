import React from 'react';
import Pagination from "react-js-pagination";
import LoadingAnimation from "../global/LoadingAnimation";
import BlogItem from "./BlogItem";
import {connect} from "react-redux";
import {fetchBlogs} from "../../actions/blogsActions";

const LIMIT_ON_PAGE = 5;
const DEFAULT_ACTIVE_PAGE = 1;
class BlogsList extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            activePage: DEFAULT_ACTIVE_PAGE
        };


        this.props.dispatch(fetchBlogs((this.state.activePage - 1) * LIMIT_ON_PAGE, LIMIT_ON_PAGE));

    }



    handlePageChange = (pageNumber) => {
        this.setState({activePage: pageNumber});
        this.props.dispatch(fetchBlogs((pageNumber - 1) * LIMIT_ON_PAGE, LIMIT_ON_PAGE));
    };

    render() {

        return (
            <div>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={LIMIT_ON_PAGE}
                    totalItemsCount={this.props.quantityBlogs}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                />
                {(this.props.is_fetching) ? <LoadingAnimation/> : <BlogItem blogs={this.props.blogs}/>}
            </div>

        );
    }

}

function mapStateToProps(store) {
    return {
        blogs: store.blogs.blogs,
        quantityBlogs: store.blogs.quantityBlogs,
        is_fetching: store.blogs.is_fetching
    };
}

export default connect(mapStateToProps)(BlogsList);