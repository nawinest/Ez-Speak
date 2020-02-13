import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";

class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOpen: false,
            headerTitle: this.props.title
        }
        this.close = this.close.bind(this)
    }

    componentDidUpdate() {
        const { listOpen } = this.state
        setTimeout(() => {
            if (listOpen) {
                window.addEventListener('click', this.close)
            }
            else {
                window.removeEventListener('click', this.close)
            }
        }, 0)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.close)
    }

    close(timeOut) {
        this.setState({
            listOpen: false
        })
    }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    render() {
        const { list, collapse, type } = this.props
        const { listOpen, headerTitle } = this.state
        return (
            <DDWrapper isCollapse={collapse}>
                <div className="dd-header" onClick={() => this.toggleList()}>
                    {type !== "main" ?
                        <DDTitle>{headerTitle}</DDTitle> :
                        <DDTitle>
                            <span>{headerTitle}</span>
                            <SubMenu>มือใหม่ 5</SubMenu>
                        </DDTitle>
                    }

                    {listOpen
                        ? <FontAwesomeIcon icon={faAngleUp} />
                        : <FontAwesomeIcon icon={faAngleDown} />
                    }
                </div>
                {listOpen && <DDList isCollapse={collapse} onClick={e => e.stopPropagation()}>
                    {list.map((item, index) => (
                        <li className="dd-list-item" onClick={() => this.props.handleDropdown(item.id)} key={item.id}>{item.title}</li>
                    ))}
                </DDList>}
            </DDWrapper>
        )
    }
}

const DDTitle = styled.div`
    font-weight: 500;
    margin-right: 10px;
    text-align: right;
    @media (max-width: 769px) {
        text-align: left;
    }
`;

const SubMenu = styled.div`
    font-weight: 300;
    font-size: 14px;
    margin-top: -10px;
    line-height: 16px;
    color: #2EDD7A;
`;

const DDList = styled.ul`
    margin:0;
    position: absolute;
    width: 100%;
    max-width: 300px;
    top: 60px;
    z-index: 20;
    border-top: none;
    border-radius: 3px;
    background-color: #fff;
    font-weight: 300;
    padding: 15px 0;
    max-height: 215px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    -webkit-box-shadow: -2px -2px 32px -8px rgba(0,0,0,0.45);
    -moz-box-shadow: -2px -2px 32px -8px rgba(0,0,0,0.45);
    box-shadow: -2px -2px 32px -8px rgba(0,0,0,0.45);
    ${props => {
        if (props.isCollapse) {
            return `top: -64px;padding:0`
        }
    }}
    
`

const DDWrapper = styled.div`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    width: 100%;
    // min-width: 200px;
    ${props => {
        if (props.isCollapse) {
            return `width: 100%;`
        }
    }}
`

export default Dropdown