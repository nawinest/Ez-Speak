import React, { Component } from 'react'
import Navbar from "./component/NavsBar";
import GlobalStyle from './Utility/Global';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LandingPage from './scence/landing/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'
import Modal from './component/modal/Modal';
import LessonOverviewPage from './scence/lesson_overview/LessonOverViewPage';
import ContainerEz from './component/ContainerEz';
import SearchPage from './scence/search/SearchPage';
import NotFoundPage from './scence/not_found/NotFoundPage';

class App extends Component {
  state = {
    navbarOpen: false,
    modalOpen: false,
    modalType: ""
  }


  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  handleModal = (modalType) => {
    if (this.state.modalOpen) { document.body.style.overflow = 'unset' }
    this.setState({
      modalOpen: !this.state.modalOpen,
      modalType: modalType
    });
  }

  render() {

    return (

      <Provider store={store}>
        <Router>
          <div>
            <Modal
              show={this.state.modalOpen}
              handleModal={this.handleModal}
              modalType={this.state.modalType} />

            <ContainerEz>
              <Navbar
                navbarState={this.state.navbarOpen}
                handleNavbar={this.handleNavbar}
                handleModal={this.handleModal} />
            </ContainerEz>
          </div>
          <div className='content'>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/lesson" exact component={LessonOverviewPage} />
              <Route path="/search/:page" exact component={SearchPage} />
              <Route path="*"><NotFoundPage /></Route>
            </Switch>
          </div>
          <GlobalStyle />
        </Router>
      </Provider>
    )
  }
}



export default App;
