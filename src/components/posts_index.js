import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
/*4.3 */ import _ from "lodash";
/* 5. link importieren für das routing wenn man auf den button klickt*/
import { Link } from "react-router-dom";

class PostIndex extends Component {
  /* 2. wird erst dann ausgeführt nachdem die Komponente am bildschirm
        angezeigt wird. Hier kann man Daten holen und einfügen. */
  componentDidMount() {
    this.props.fetchPosts();
  }

  /* 4.1. Methode erstellen die durch das Array von empfangenen
          Daten läuft und die li Elemente zeichnet. */
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <div className="text-xs-right">
          {/* to=> sagt wohin man navigieren muss  */}
          <Link className=" btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        {/* 4.2. renderPosts() Methode aufrufen */}
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
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
