import React from 'react';
import styled from "styled-components";

const SimpleCard = (props) => {
  return (
    <CardEz>
        <ImageIcon src="https://image.flaticon.com/icons/png/512/145/145859.png" alt="testImg" />
        <CardTopic>Improve your skills</CardTopic>
        <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </CardContent>
    </CardEz>
  );
}

export default SimpleCard;


const CardTopic = styled.h5`   
    margin: 0.5em 0;
    font-weight: 400;
    font-size: 15px;
`;

const CardContent = styled.h5`   
    font-size: 11px;
    font-weight: 300;
`;

const CardEz = styled.div`
    margin-top: 1.5em;
    flex: 0 0 25.0%;
    text-align: center;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 700px) {
        flex: 0 0 50%;
    }
`;


const ImageIcon = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
`;