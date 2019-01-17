import React, { Component } from "react";
import Post from "./post";
import Header from "./header";
import CreatePost from "./createPost";

class PostView extends Component {
  constructor() {
    super();
    this.state = {
      postArray: []
    };
  }

  componentWillMount() {
    console.log("COMPONENT WILL MOUNT");
  }

  componentDidMount() {
    console.log("COMPONENT DID MOUNT");

    const newState = {
      postArray: []
    };
    this.setState(newState);
    this.readFromStorage();
  }

  saveInStorage() {
    const postArray = this.state.postArray;
    localStorage.setItem("posts", JSON.stringify(postArray));
  }

  readFromStorage() {
    let postSaved = localStorage.getItem("posts");
    postSaved = JSON.parse(postSaved);

    this.setState({ postArray: postSaved || [] });
  }

  onSubmitPost(postObject) {
    let { postArray } = this.state;

    // adicionando um tempo no post
    postObject.time = new Date().getTime();
    postArray.push(postObject);

    this.setState({ postArray: postArray });

    this.saveInStorage();
  }

  render() {
    this.state.postArray.sort((a, b) => b.time - a.time);

    console.log("app render");

    return (
      <div>
        <Header />

        <CreatePost onSubmit={this.onSubmitPost.bind(this)} />

        {this.state.postArray.map((post, index) => {
          return (
            <Post key={index} title={post.titulo} time={post.time}>
              {post.text}
            </Post>
          );
        })}
      </div>
    );
  }
}

export default PostView;
