import React, { Component } from 'react';
import styled from "styled-components";
import Select from 'react-select'

import { connect } from 'react-redux'
import { createCourse } from '../../../actions/course'

class AddCourse extends Component {


    state = {
        courseName: "",
        courseLevel: 1,
        courseDetail: ""
    }

    handleAddCourse = () => {
        const data = {
            courseName: this.state.courseName,
            courseLevel: this.state.courseLevel,
            courseDetail: this.state.courseDetail
        }
        this.props.createCourse(data)
    }

    handleChange = (e, field) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleChangeOption = selectedOption => {
        console.log(selectedOption)
        this.setState({ courseLevel: selectedOption.value });
    };

    componentDidMount() {

    }

    options = [
        { value: 1, label: 'ผู้เริ่มต้น' },
        { value: 2, label: 'ปานกลาง' },
        { value: 3, label: 'ผู้เชียวชาญ' },
    ];

    render() {
        return (
            <>
                <div>
                        <HeaderWrapper> <HeaderTitle> สร้างคอร์สใหม่ </HeaderTitle>
                            <ButtonEz startButton onClick={this.handleAddCourse}> บันทึกข้อมูล </ButtonEz>  </HeaderWrapper>
                        <hr></hr>
                        <InputGroupWrapper>
                            <InputGroup nameCourse>
                                <InputTitle>
                                    ชื่อคอร์ส
                                </InputTitle>
                                <Input name="courseName" onChange={this.handleChange} value={this.state.courseName} placeholder={"เริ่มต้นการพูด"}></Input>
                            </InputGroup>
                            <InputGroup selection>
                                <InputTitle>ระดับคอร์ส</InputTitle>
                                <Select options={this.options} onChange={this.handleChangeOption} />
                            </InputGroup>
                        </InputGroupWrapper>
                        <InputGroup>
                            <InputTitle>
                                รายละเอียดคอร์ส
                            </InputTitle>
                            <TextAreaEz name="courseDetail" onChange={this.handleChange} value={this.state.courseDetail} placeholder={""}></TextAreaEz>
                        </InputGroup>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    course: state.course,
})

export default connect(mapStateToProps, {createCourse})(AddCourse);

const HeaderTitle = styled.h3`
    font-weight: 300;
`;

const InputTitle = styled.h6`
    font-weight: 400;
`;

const InputGroupWrapper = styled.div`
    display:flex;
    width: 100%;
`;

const HeaderWrapper = styled.div`
    display:flex;
    width: 100%;

    & h3 {
        margin-bottom : none;
        margin-right: auto;
    }
`;

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

const TextAreaEz = styled.textarea`
    padding-left: 0.35em;
    width: 100%;
    height: 119px;
    border-color: hsl(0,0%,80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box; 
    border-radius: 6px;
`


const InputGroup = styled.div`
    padding-bottom: 20px;

    ${props => props.selection && `width: 30%`}
    ${props => props.nameCourse && `width: 70%;padding-right: 16px;`}
`


const ButtonEz = styled.button`
    border: none;
    font-family: Kanit;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 15px;
    padding: 6px 30px;

    color: #FFFFFF;
    background: #4DA8F9;
    border-radius: 5px;

`;

