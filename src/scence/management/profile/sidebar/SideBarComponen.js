
import styled from "styled-components";
import LeftIcon from '../../../../assets/leftArrow-icon';
import MenuItemComponent from './MenuItemConponent';
import React, { Component } from 'react'

class SidebarComponent extends Component {

    state = { expanded: false };

    onItemClicked = (item) => {
        this.setState({ expanded: false });
        return this.props.onChange(item);
    }

    isMobile = () => window.innerWidth <= 768;

    toggleMenu = () => {
        this.setState(prevState => ({ expanded: !prevState.expanded }));
    }

    renderBurger = () => {
        return <BurgerIcon onClick={this.toggleMenu}>
            <LeftIcon />
        </BurgerIcon>
    }

    render() {
        const { expanded } = this.state;
        const isMobile = this.isMobile();
        return (
            <div style={{ position: 'relative' }}>
                <RowWrapper expanded={expanded}>
                    {(isMobile && !expanded) && this.renderBurger()}
                    <ColumnWrapper expanded={expanded}>
                        {/* <LogoComponent /> */}
                        <ColumnMenuItemList>
                            <MenuItemComponent
                                title="แก้ไขข้อมูส่วนตัว"
                                onClick={() => this.onItemClicked('Overview')}
                                active={this.props.selectedItem === "editProfile"}
                            />
                            <MenuItemComponent
                                title="สมัครเป็นครู"
                                onClick={() => this.onItemClicked('Tickets')}
                                active={this.props.selectedItem === 'editProfilez'}
                            />
                        </ColumnMenuItemList>
                    </ColumnWrapper>
                    {isMobile && expanded && <OutsideLayers onClick={this.toggleMenu}></OutsideLayers>}
                </RowWrapper>
            </div>
        );
    };
}

const RowWrapper = styled.div`
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-flow: row nowrap;

    @media (max-width: 768px) {
        position: absolute;
        top: 0;
        left: 0;
    }

    ${props => props.expanded && `
        width: 100%;
        min-width: 100%;
    `}
`

const ColumnWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    background-color: #43BEF2; !important;
    width: 255px !important;
    height: 100%;
    transition: left 0.5s, right 0.5s;
    position: absolute;
    width: 255px;
    z-index: 901;

    ${props => props.expanded === true ? `left: 0px;` : `left: -255px;`}

    @media (min-width: 768px) {
        position: absolute;
        left: 0;
    }
`;


const ColumnMenuItemList = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin-top: 10px;
`;

const BurgerIcon = styled.div`
    cursor: pointer;
    position: fixed;
    bottom: 25px;

    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    & svg {
        fill: white;
    }

    background: #43BEF2;
`;

const OutsideLayers = styled.div`
    position: absolute;
    width: 100vw;
    min-width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.50);
    z-index: 900;
`;

export default SidebarComponent;
