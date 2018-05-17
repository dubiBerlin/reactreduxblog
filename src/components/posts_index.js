import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostIndex extends Component {
  render() {
    return <div>Posts index</div>;
  }
}

// null weil nicht "mapStateToProps" übergeben wird
export default connect(null, { fetchPosts: fetchPosts })(PostIndex);
