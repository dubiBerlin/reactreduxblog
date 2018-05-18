import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostIndex extends Component {
  /* 2. wird erst dann ausgeführt nachdem die Komponente am bildschirm
        angezeigt wird. Hier kann man Daten holen und einfügen. */
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return <div>PostIndex</div>;
  }
}

// 3. man bindet den state an die props der Komponente. Die Daten sind da durch fetchPosts()
//    innerhalb der componentDidMount Methode
function mapStateToProps(state) {
  return { posts: state.posts };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//       fetchPosts
//     },
//     dispatch
//   );
// }

// 1. null weil nicht "mapStateToProps" übergeben wird
//    Anstelle von mapDispatchToProps kann man auch einfach die Action so übergeben
export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostIndex);
//export default connect(null, mapDispatchToProps)(PostIndex);
