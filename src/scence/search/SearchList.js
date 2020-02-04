import React, { Component } from 'react';
import styled from "styled-components";
import CourseFeature from '../landing/CourseFeature';
import Constants from '../../Utility/Constant'

class SearchList extends Component {
    state = {}
    render() {
        return (
            <>

                <RowEasy>
                    <CourseFeature
                        imagesURL={"https://cdn-images-1.medium.com/max/800/1*1-n8b6qiAe7aAk1sEv4dww.png"}
                        nameOfCourse={"ฝึกพื้นฐานการสนทนาที่ใช้ในชีวิตประจำวัน"}
                        courseLink={"#"}
                        courseType={Constants.NEWBIE_STUDENT}
                    />
                </RowEasy>

            </>
        );
    }
}

export default SearchList;

const RowEasy = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`