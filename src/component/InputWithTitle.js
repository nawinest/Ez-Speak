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
    border-color: hsl(0,0%,80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box; 
    height: 38px;
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
