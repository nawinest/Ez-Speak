import React, { Component } from 'react';
import styled from "styled-components";
import Footer from '../landing/Footer';
import ContainerEz from '../../component/ContainerEz';
import Text from '../../component/Text';
import FilterBar from './FilterBar';
import SearchList from './SearchList';
import Pagination from './Pagination';


class SearchPage extends Component {
    state = {}

    componentDidMount = () => {
        const { page } = this.props.match.params
    }

    render() {
        return (
            <>
                <SearchSection>
                    <ContainerEz>
                        <Text size="18" fontWeight="500" customColor="#4DA8F9">คอร์สทั้งหมด</Text>
                        <FilterBar />
                    </ContainerEz>
                </SearchSection>
                <ContainerEz>
                    <SectionWrapper>
                        <SearchList />
                    </SectionWrapper>
                </ContainerEz>
                <SectionWrapper>
                    <Footer />
                </SectionWrapper>
                <Pagination />
            </>);
    }
}

const SearchSection = styled.div`
    width: 100%;
    padding: 25px 0;
    background: #F4F4F4;
`;

const SectionWrapper = styled.div`
    margin: 25px 0;
    width: 100%;
`;


export default SearchPage;