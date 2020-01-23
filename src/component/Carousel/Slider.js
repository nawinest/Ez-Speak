import React, { Component } from 'react';
import style from './slider.css'
import Constants from '../../Utility/Constant';
import classNames from 'classnames/bind';
import CourseItem from './CourseItem';
import styled from "styled-components";
const cx = classNames.bind(style)

class Slider extends Component {
    state = {
        moving: false,
        mv: 0,
        click: false,
        startId: 0,
        showItems: 1,
        totalItems: 0,
        sliderItems: [],
        data: [
            {
                img: "https://media-cdn.tripadvisor.com/media/photo-s/0c/13/c0/8d/street-bangkok-local.jpg"
            },
            {
                img: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
            },
            {
                img: "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg"
            },
            {
                img: "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgTXYO7Z2ApzMSwR0jfTQ6b1eFrTt3x1ixf9amNMYXFGSDfvu&s"
            },
            {
                img: "https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5qNumzoEOugQkHeF3rDeWEbJklsydFiM1a4weWL6fL6nn8xO&s"
            },
            {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tKKGfVwWjA2RYFROx_yKkE5n6Dx5PgVN6es2rvdS_31FL89-&s"
            },
            {
                img: "https://tinyjpg.com/images/social/website.jpg"
            },
            {
                img: "https://tinyjpg.com/images/social/website.jpg"
            },
            {
                img: "https://tinyjpg.com/images/social/website.jpg"
            },
            {
                img: "https://tinyjpg.com/images/social/website.jpg"
            },
            {
                img: "https://tinyjpg.com/images/social/website.jpg"
            },
            {
                img: "https://tinyjpg.com/images/social/website.jpg"
            }
        ]
    }



    componentDidMount = () => {
        this.updateSliderState()
        this.setState({
            totalItems: this.state.data.length,
            sliderItems: this.state.data
        })
        if (typeof (window) !== undefined) {
            window.addEventListener('resize', this.windowResize);
        }
    }

    windowResize = () => {
        this.updateSliderState()
    }


    componentWillUnmount() {
        if (typeof (window) !== undefined) {
            window.removeEventListener('resize', this.updateSliderState);
        }
    }

    updateSliderItems = (baseShowItem = this.state.showItems) => {
        let { totalItems, startId } = this.state
        let centerDataId = []
        for (let i = 0; i < baseShowItem; i++) {
            let x = startId + i
            if (x < totalItems) {
                centerDataId.push(x)
            } else {
                centerDataId.push(x - totalItems)
            }
        }

        let leftDataId = []
        for (let i = 0; i < baseShowItem + 1; i++) {
            let x = startId - i - 1
            if (x >= 0) {
                leftDataId.push(x)
            } else {
                leftDataId.push(totalItems + x)
            }
        }

        leftDataId.reverse()

        let rightDataId = []
        for (let i = 0; i < baseShowItem + 1; i++) {
            let x = startId + baseShowItem + i
            if (x < totalItems) {
                rightDataId.push(x)
            } else {
                rightDataId.push(x - totalItems)
            }
        }

        console.log('left', leftDataId)
        console.log('center', centerDataId)
        console.log('right', rightDataId)

        let selectIds = [...leftDataId, ...centerDataId, ...rightDataId]
        let sliderItems = []

        if (this.state.data.length) {
            selectIds.map((e) => {
                sliderItems.push(this.state.data[e])
            })
        }
        this.setState({ sliderItems })
    }

    updateSliderState = () => {
        // date total
        let windowWidth = window.innerWidth
        // same css naja
        let showItems = 2

        if (windowWidth > 1800) {
            showItems = 3
        } else if (windowWidth > 1200) {
            showItems = 3
        } else if (windowWidth > 980) {
            showItems = 3
        } else if (windowWidth > 768) {
            showItems = 3
        } else if (windowWidth > 600) {
            showItems = 2
        }


        let mv = 100 / showItems
        this.setState({ showItems, mv })
    }

    handleLeftArrowClick = () => {
        console.log("left")
        const { showItems, startId, totalItems, mv } = this.state
        let reducePrev = startId - showItems
        let resetStartId = 0
        let slider = this.refs.slider
        if (reducePrev < 0) {
            resetStartId = totalItems + reducePrev
        } else {
            resetStartId = reducePrev
        }
        this.setState({
            startId: resetStartId,
            moving: true
        })

        slider.style.transform = 'translate3d(-' + mv + '%, 0, 0)'
        setTimeout(() => {
            slider.style.transform = 'translate3d(-1' + mv + '%, 0, 0)'
        }, 750)

        setTimeout(() => {
            this.setState({
                moving: false
            })
            this.updateSliderItems()
        }, 750)
    }

    handleRightArrowClick = () => {
        console.log("right")
        const { showItems, startId, totalItems, mv, click } = this.state
        let slider = this.refs.slider
        let plusNext = startId + showItems
        let resetStartId = 0
        if (plusNext >= totalItems) {
            resetStartId = plusNext - totalItems
        } else {
            resetStartId = plusNext
        }
        this.setState({
            startId: resetStartId,
            moving: true,
            click: true
        })

        if (!click) {
            slider.style.transform = 'translate3d(-100%, 0, 0)'
            setTimeout(() => {
                slider.style.transform = 'translate3d(-1' + mv + '%, 0, 0)'
            }, 750)
        } else {
            slider.style.transform = 'translate3d(-2' + mv + '%, 0, 0)'
            setTimeout(() => {
                slider.style.transform = 'translate3d(-1' + mv + '%, 0, 0)'
            }, 750)
        }

        setTimeout(() => {
            this.setState({
                moving: false
            })
            this.updateSliderItems()
        }, 750)

    }

    render() {
        const { sliderItems, moving, click } = this.state
        const sliderClass = cx({
            sliderMask: true,
            moving
        })
        return (
            <div className="root">
                <SliderWrapper>
                    <div className={sliderClass} ref="slider">
                        {
                            sliderItems.map((e, i) => {
                                return (
                                    <CourseItem
                                        key={i}
                                        data={e}
                                        nameOfCourse={"ฝึกพื้นฐานการสนทนาที่ใช้ในชีวิตประจำวัน"}
                                        courseLink={"#"}
                                        courseType={Constants.NEWBIE_STUDENT}
                                    />
                                )
                            })
                        }
                    </div>
                    {
                        click &&
                        <Arrow left
                            ref="leftArrow"
                            onClick={this.handleLeftArrowClick}>
                            <>{"<"}</>
                        </Arrow>
                    }

                    <Arrow right
                        className="rightArrow arrow"
                        ref="rightArrow"
                        onClick={this.handleRightArrowClick}>
                        <>{">"}</>
                    </Arrow>
                </SliderWrapper>
            </div>);
    }
}

const SliderWrapper = styled.div`
    max-width: 100vw;
    z-index: 1;
    padding: 0 60px;
    position: relative;

    @media (max-width: 768px) {
        padding: 0 20px;
    }
    
`;


const Arrow = styled.div`
    position: absolute;
    top: 0;
    width: 55px;
    cursor: pointer;
    height: calc(100% - 6px);
    z-index: 10;
    font-size: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;


    @media (max-width: 768px) {
        display: none;
    }

    ${props => props.left && `
        left: 0;
        background: rgba(0, 0, 0, 0.7);
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    `}

    ${props => props.right && `
        right: 0;
        background: linear-gradient(to right, rgba(35, 35, 35, 0.5), rgba(35, 35, 35, 1));
        background: rgba(0, 0, 0, 0.7);
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    `}

    
`

export default Slider;