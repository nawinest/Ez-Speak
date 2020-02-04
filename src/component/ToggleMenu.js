import React, { Component } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

class ToggleMenu extends Component {
    state = {}

    toggle() {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }))

        if (this.props.handleToggle !== undefined) {
            this.props.handleToggle()
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            toggle: false,
            headerTitle: this.props.title
        }
    }

    render() {
        const { toggle, headerTitle } = this.state
        return (
            <ToggleWrapper>
                <ToggleHeader onClick={() => this.toggle()}>
                    <div className="dd-header-title">{headerTitle}</div>
                    {toggle
                        ? <FontAwesomeIcon icon={faAngleUp} />
                        : <FontAwesomeIcon icon={faAngleDown} />
                    }
                </ToggleHeader>
            </ToggleWrapper>
        )
    }
}

const ToggleWrapper = styled.div`
    width: 100%;
    padding: 6px 15px;
    background: #FFFFFF;
    border: 0.4px solid #C6C6C6;
    border-radius: 5px;
    margin-right: 5px;
`;

const ToggleHeader = styled.div`
    display: flex;
    align-items: center;

    & :nth-child(1) {
        flex-grow: 2;
    }

`;

export default ToggleMenu;