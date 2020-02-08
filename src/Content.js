import React, { Component } from 'react';
import Navbar from "./component/NavsBar";
import GlobalStyle from './Utility/Global';

import LandingPage from './scence/landing/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Modal from './component/modal/Modal';
import LessonOverviewPage from './scence/lesson_overview/LessonOverViewPage';
import ContainerEz from './component/ContainerEz';
import SearchPage from './scence/search/SearchPage';
import NotFoundPage from './scence/not_found/NotFoundPage';

import { connect } from 'react-redux'
import { loadUser, logout } from './actions/user'
import Loading from './component/Alert/Loading';
import ManangementCoursePage from './scence/management_course/ManangementCoursePage';

class Content extends Component {
    state = {}

    state = {
        navbarOpen: false,
        modalOpen: false,
        modalType: ""
    }

    componentDidMount() {
        this.props.loadUser()
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

    handleLogout = () => {
        this.props.logout()
    }

    render() {
        return (
            <Router>
                {this.props.globalState.loading && <Loading />}
                <div>
                    <Modal
                        show={this.state.modalOpen}
                        handleModal={this.handleModal}
                        modalType={this.state.modalType} />

                    <ContainerEz>
                        <Navbar
                            handleLogout={this.handleLogout}
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
                        <Route path="/user/management/course" exact component={ManangementCoursePage} />
                        <Route path="*"><NotFoundPage /></Route>
                    </Switch>
                </div>
                <GlobalStyle />
            </Router>);
    }
}


const mapStateToProps = (state) => ({
    user: state.user,
    globalState: state.globalState
})

export default connect(mapStateToProps, { loadUser, logout })(Content);