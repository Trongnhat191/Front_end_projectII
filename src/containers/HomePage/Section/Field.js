import { divide } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Field.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import field1 from '../../../assets/field/field1.jpg';

class Field extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            // nextArrow: <SampleNextArrow />,
            // preArrow: <SamplePreArrow />
        };
        return (
            <div className='section-field'>
                <div className='field-container'>
                    <div className='field-header'>
                        <span className='title-section'>San pho bien</span>
                        <button className='btn-section'>Xem them</button>
                    </div>
                    <div className='field-body'>
                        <Slider {...settings}>
                            <div className='field-customize'>
                                <div className='bg-image' />
                                <div>San 1</div>
                            </div>
                            <div className='field-customize'>
                                <div className='bg-image' />
                                <div>San 1</div>
                            </div>
                            <div className='field-customize'>
                                <div className='bg-image' />
                                <div>San 1</div>
                            </div>
                            <div className='field-customize'>
                                <div className='bg-image' />
                                <div>San 1</div>
                            </div>
                            <div className='field-customize'>
                                <div className='bg-image' />
                                <div>San 1</div>
                            </div>
                            <div className='field-customize'>
                                <div className='bg-image' />
                                <div>San 1</div>
                            </div>

                        </Slider>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
