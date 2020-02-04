import React, { Component } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

class DropdownMenu extends Component {
    state = {}

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    constructor(props) {
        super(props)
        this.state = {
            listOpen: false,
            headerTitle: this.props.title
        }
    }

    render() {
        const { list } = this.props
        const { listOpen, headerTitle } = this.state
        return (
            <DropdownWrapper>
                <DropdownHeader onClick={() => this.toggleList()}>
                    <div className="dd-header-title">{headerTitle}</div>
                    {listOpen
                        ? <FontAwesomeIcon icon={faAngleUp} />
                        : <FontAwesomeIcon icon={faAngleDown} />
                    }
                </DropdownHeader>
                {listOpen && <ul className="DropdownUL">
                    {list.map((item) => (
                        <DropdownLi key={item.id} >{item.title}</DropdownLi>
                    ))}
                </ul>}
            </DropdownWrapper>
        )
    }
}

const DropdownWrapper = styled.div`
    width: 100%;
    padding: 6px 15px;
    background: #FFFFFF;
    border: 0.4px solid #C6C6C6;
    border-radius: 5px;
`;

const DropdownHeader = styled.div`
    display: flex;
    align-items: center;

    & :nth-child(1) {
        flex-grow: 2;
    }

`;

const DropdownUl = styled.ul`
    

`;

const DropdownLi = styled.li`
    list-style: none;
    padding: 5px 0;
    border-bottom: 1px solid black;
`;
export default DropdownMenu;