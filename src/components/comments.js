import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return(
            <div style={{padding: 20}}>
                <p>
                    {this.props.commentText}
                </p>
            </div>
        );
    }
}

export default Comment;