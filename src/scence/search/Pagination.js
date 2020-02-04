import React, { Component } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

class Pagination extends Component {
    state = {
        previous_page: null,
        start_page: null,
        next_page: null,
        current_page: null,
        end_page: null,
        pages: []
    }

    componentDidMount = () => {
        let page = 4
        let limit = 2
        let record_per_page = 9
        let total = 500

        const pagination = generatePagination(page, total, record_per_page, limit)
        this.setState({
            previous_page: pagination.previous_page,
            start_page: pagination.start_page,
            next_page: pagination.next_page,
            current_page: pagination.current_page,
            pages: pagination.pages,
            end_page: pagination.end_page
        })
    }

    render() {
        let previous_page;
        let start;
        let endPage;
        let next_page;
        if (this.state.previous_page !== null) {
            previous_page = <PaginationNumber>
                <SubMenu controllBtn href={`/search/` + this.state.previous_page}><FontAwesomeIcon icon={faAngleLeft} /></SubMenu>
            </PaginationNumber>
        }

        if (this.state.start_page !== null) {
            start = <>
                <PaginationNumber>
                    <SubMenu id={`page-` + this.state.start_page}
                        href={`/search/` + this.state.start_page}>{this.state.start_page}</SubMenu>
                </PaginationNumber>
                <li className="pagination-dot">...</li>
            </>
        }

        let pageItems = this.state.pages.map((page, index) => {
            if (page === this.state.current_page) {
                return (<PaginationNumber currentPage key={index}> {page} </PaginationNumber>)
            } else {
                return (<PaginationNumber key={index}>
                    <SubMenu id={`page-` + page} href={`/search/` + page}>{page}</SubMenu>
                </PaginationNumber>)
            }
        });

        if (this.state.end_page !== null) {
            endPage =
                <>
                    <li className="pagination-dot">...</li>
                    <PaginationNumber>
                        <SubMenu id={`page-` + this.state.end_page} href={`/search/` + this.state.end_page}>{this.state.end_page}</SubMenu>
                    </PaginationNumber>
                </>
        }

        if (this.state.next_page !== null) {
            next_page =
                <>
                    <PaginationNumber>
                        <SubMenu controllBtn id={`page-` + this.state.next_page} href={`/search/` + this.state.next_page}><FontAwesomeIcon icon={faAngleRight} /></SubMenu>
                    </PaginationNumber>
                </>
        }



        return (
            <>
                <PaginationWrapper>
                    <ItemList>
                        {previous_page}
                        {start}
                        {pageItems}
                        {endPage}
                        {next_page}
                    </ItemList>
                </PaginationWrapper>

            </>
        );
    }
}

const PaginationNumber = styled.li`
    color: ${props => props.currentPage ? `#4DA8F9`: `#000000`};
`;

const SubMenu = styled.a`
    color: ${props => props.controllBtn ? `#4DA8F9`: `#000000`};
    &:hover {
        text-decoration: none;
    }


`;


const PaginationWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;


const ItemList = styled.ul`
    display: flex;
    & li {
        list-style: none;
        padding: 10px 15px;
    }
`;


const generatePagination = (current_page, total, limit, links = 3) => {
    let last = Math.ceil(total / limit)
    let start_page = null
    let end_page = null
    let next_page = null
    let previous_page = null

    let start = 1
    if ((current_page - links) > 0) {
        start = current_page - links
    }


    let end = last
    if ((current_page + links) < last) {
        end = current_page + links
    }


    if (start > 1) {
        start_page = 1
    }

    let pages = []
    for (let i = start; i < end + 1; i++) {
        pages.push(i)
    }

    if (end < last) {
        end_page = last
    }

    if (current_page < end) {
        next_page = current_page + 1
    }


    if (current_page > 1) {
        previous_page = current_page - 1
    }

    return {
        start_page: start_page,
        pages: pages,
        end_page: end_page,
        current_page: current_page,
        next_page: next_page,
        previous_page: previous_page
    }

}
export default Pagination;
