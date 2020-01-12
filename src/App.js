import React, { Component } from 'react'
import Navbar from "./component/NavsBar";
import GlobalStyle from './Utility/Global';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container } from 'react-bootstrap';
import LandingPage from './scence/landing/LandingPage';
class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <div>
        <div>
          <Container>
            <Navbar
              navbarState={this.state.navbarOpen}
              handleNavbar={this.handleNavbar} />
          </Container>
        </div>
          <div className='content'>
            <LandingPage />
          </div>


          <GlobalStyle />
        </div>

        )
      }
    }
    
    export default App
