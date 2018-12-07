import React, { Component } from 'react';
import logo from '../dist/img/logo.png';
import './header.css';

class Header extends Component {
    render(){
        return (
            <div className={'header'}>
                <img src={logo} alt="App Masters" className={'logo'} />
            </div>
        );
    }
}

export default Header;