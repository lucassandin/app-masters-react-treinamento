import React, { Component } from "react";
import './post.css';
import logo from '../dist/img/avatar.svg';
import like from '../dist/img/like.svg';
import Comment from '../components/comments';

class Post extends Component {

    constructor(){
        super();
        this.state={
            likes: 0,
            newComment: '',
            comments: []
        }
    }

    onChange(event, key) {
        const value = event.target.value;
        this.setState({[key]: value})
    }

    componentWillMount (){
        console.log('POST COMPONENT WILL MOUNT')
    }

    componentDidMount(){
        console.log('POST COMPONENT DID MOUNT')
        this.readFromStorage();
    }

    onSubmitComment(){
        const {newComment, comments}= this.state;

        comments.push({text: newComment, post: this.props.time});

        this.saveInStorage();
        this.setState({
            comments,
            newComment: ''
        })
    }

    saveInStorage(){
        const {comments} = this.state;
        localStorage.setItem(`comment_ ${this.props.time}`, JSON.stringify(comments));
    }

    readFromStorage(){
        let commentsSaved = localStorage.getItem(`comment_ ${this.props.time}`);
        commentsSaved = JSON.parse(commentsSaved);

        this.setState({comments: commentsSaved || []})
    }

    render() {
        console.log('post render')
        return (
            <div className={'post'}>
                <small className={'time'}>{this.props.time}</small>
                <label className={'label'}>
                    <img src={logo} alt="Avatar" height="24" className="avatar-class" />
                </label>
                <h2>{this.props.title}</h2>
                <p className={'text-post'}>{this.props.children}</p>
                <button className={'likes'} onClick={() => this.setState({ likes: this.state.likes + 1 })}><img src={like} alt="Likes" /> {this.state.likes}</button>
                <button className={'comments'} onClick={() => {}}>Comments</button>
                {this.state.comments.map(comment => {
                    return <Comment commentText={comment.text} />
                })}
                <input  value={this.state.newComment} 
                        onChange={(event) => this.onChange(event, 'newComment')}
                        placeholder={'Novo comentário'} />
                <button onClick={()=>this.onSubmitComment()}>Postar Comentário</button>
            </div>
        );
    }
}

export default Post;