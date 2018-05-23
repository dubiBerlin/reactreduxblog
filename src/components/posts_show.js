import React, { Component } from "react";

import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class PostsShow extends Component {
  componentDidMount() {
    /* Wir brauchen die id von dem post. Diese id wurde von react-router in die
      props eingefügt.  */
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    if (!post) {
      return <div>Loading ...</div>;
    }
    const { post } = this.props;
    return (
      <div>
        <Link to="/">Back to Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
