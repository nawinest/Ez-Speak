import React from 'react';
import styled from "styled-components";
import Text from '../../component/Text';
import ToggleMenu from '../../component/ToggleMenu';

const FilterBar = (props) => {

  const list = [
    {
      id: 0,
      title: 'New York',
      selected: false,
      key: 'location'
    },
    {
      id: 1,
      title: 'Dublin',
      selected: false,
      key: 'location'
    },
    {
      id: 2,
      title: 'California',
      selected: false,
      key: 'location'
    },
    {
      id: 3,
      title: 'Istanbul',
      selected: false,
      key: 'location'
    },
    {
      id: 4,
      title: 'Izmir',
      selected: false,
      key: 'location'
    },
    {
      id: 5,
      title: 'Oslo',
      selected: false,
      key: 'location'
    }
  ]

  return (
    <RowEz>
        <Label>
            <Text size="10" fontWeight="300" topicColor >คัดกรองจาก</Text>
        </Label>
        <ToggleMenuWrapper>
            <ToggleMenu
                title="ได้รับความนิยม"
            />
            <ToggleMenu
                title="ได้รับความนิยม"
            />
        </ToggleMenuWrapper>
    </RowEz>
  );
}

const Label = styled.div`
    min-width: 70px;
    @media (max-width: 769px) {
        width: 100%;
        margin-bottom: 5px;
    }
`;

const ToggleMenuWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    width: 100%;

    & >div {
        box-sizing: border-box;
        max-width: 30%;
    }

    @media (max-width: 769px) {
        & >div {
            max-width: 50%;
        }
    }
`;

const RowEz = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 0;
    align-items: center;
    @media (max-width: 769px) {
        flex-direction: column;
    }
`;
export default FilterBar;