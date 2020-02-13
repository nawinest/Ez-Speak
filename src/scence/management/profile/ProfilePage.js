import React, { Component } from 'react'
import styled from "styled-components";
import SidebarComponent from './sidebar/SideBarComponen';
import EditProfile from './profile_component/EditProfile';
import { connect } from 'react-redux'
import { updateProfile } from '../../../actions/user'


class ProfilePage extends Component {
    state = { selectedItem: 'editProfile' };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    handleUpdateUser = (data) => {
        this.props.updateProfile(data)
    }

    render() { 
        const {selectedItem} = this.state
        return ( 
        <RowWrapper>
            <SidebarComponent selectedItem={selectedItem} />
            <WrapperContent>
                <EditProfile user={this.props.user} handleUpdateUser={this.handleUpdateUser}/>
            </WrapperContent>
        </RowWrapper>  );
    }
}

const WrapperContent = styled.div`
    @media (min-width: 768px) {
        margin-left: 255px;
    }
    padding: 30px;
    flex-grow: 1;
`;

const RowWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    min-height: 100vh;
`;
 
const mapStateToProps = (state) => ({
    course: state.course,
    user: state.user
})

export default connect(mapStateToProps, {updateProfile})(ProfilePage);