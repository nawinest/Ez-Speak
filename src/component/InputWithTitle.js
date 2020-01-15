import React from 'react';
import styled from "styled-components";

const InputWithTitle = (props) => {
  return (
   <InputWrapper>
        <TitleInput>
            {props.title}
        </TitleInput>
        <Input type={props.type} name={props.name} onChange={props.onChange} value={props.value}></Input>
   </InputWrapper>
  );
}

const Input = styled.input`
    padding-left: 0.35em;
    width: 100%;
    border: 1px solid #767676;
    box-sizing: border-box; 
    height: 43px;
    border-radius: 6px;
`

const InputWrapper = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 16px;
`;

const TitleInput = styled.p`
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 8px;

    
`;

export default InputWithTitle;
