import React, { Component } from 'react'
import Navbar from "./component/NavsBar";
import GlobalStyle from './Utility/Global';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container } from 'react-bootstrap';
import LandingPage from './scence/landing/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Container>
              <Navbar
                navbarState={this.state.navbarOpen}
                handleNavbar={this.handleNavbar} />
            </Container>
          </div>
          <div className='content'>
            <Switch>
              <Route path="/" exact component={LandingPage} />
            </Switch>
          </div>
          <GlobalStyle />
        </Router>
      </Provider>
    )
  }
}

export default App
