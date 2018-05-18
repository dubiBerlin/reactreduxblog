import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostIndex extends Component {
  /* wird erst dann ausgeführt nachdem die Komponente am bildschirm
     angezeigt wird. Hier kann man Daten holen und einfügen. */
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Posts index</div>;
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//       fetchPosts
//     },
//     dispatch
//   );
// }

// null weil nicht "mapStateToProps" übergeben wird
// Anstelle von mapDispatchToProps kann man auch einfach die Action so übergeben
export default connect(null, { fetchPosts: fetchPosts })(PostIndex);
//export default connect(null, mapDispatchToProps)(PostIndex);
