import { divide } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Field.scss';
import Slider from 'react-slick';
import field1 from '../../../assets/field/field1.jpg';

class Field extends Component {
    render() {
        
        return (
            <div className='section-share section-field'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>San pho bien</span>
                        <button className='btn-section'>Xem them</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image' />
                                <div>San 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image' />
                                <div>San 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image' />
                                <div>San 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image' />
                                <div>San 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image' />
                                <div>San 1</div>
                            </div>
                            <div className='section-customize'>
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
