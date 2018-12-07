import React, { Component } from 'react';
import avatar from '../dist/img/avatar.svg';
import './createPost.css';

class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            text: ''
        };
    
      }

    getTime() {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        
        var d = new Date();
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());

        return  h + ":" + m;
    }
    
    onChange(event, key) {
        console.log(event.target.value);
        const value = event.target.value;
        this.setState({[key]: value });
    }


    render() {
        return(
            <div className={'center'}>
                <div className={'form'} >
                    <label for="avatar-choose">
                        <img src={avatar} alt="Avatar" height="24" className="avatar-class" />
                    </label>
                    <input type="file" id="avatar-choose" name="avatar-choose" />
                    <input type="text" value={this.state.titulo} onChange={(event)=> this.onChange(event, 'titulo') } placeholder="Name" />
                    <textarea value={this.state.text} onChange={ (event) => this.onChange(event, 'text') } placeholder="Post" rows="4" />
                    <button onClick={() => {
                        this.setState({titulo: '', text: ''})
                        this.props.onSubmit(this.state)
                        }} className={"buttonSubmit"} >Postar
                    </button>
                </div>
            </div>
        );
    }
}

export default CreatePost;