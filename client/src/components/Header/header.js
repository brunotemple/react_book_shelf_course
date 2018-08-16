import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import Nav from './SideNav/sideNav';

class Header extends Component {

  state = {
    showNav:false
  }

  onOpenCloseNav = () => {
    this.setState({showNav:!this.state.showNav})
  }
  
  render() {
    return (
      <header>
        <div className="open_nav">
          <FontAwesome name="bars"
          onClick={()=>this.onOpenCloseNav()}
            style={{
              color:'#ffffff',
              padding:'10px',
              cursor:'pointer'
            }}
          />
        </div>
        <Nav
          showNav={this.state.showNav}
          onHideNav={()=>this.onOpenCloseNav()}
        />
        <Link to="/" className="logo">
          The Book Shelf
        </Link>  
      </header>
    );
  }
}

export default Header;