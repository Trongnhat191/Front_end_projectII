import { divide } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Accessories.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

class Accessories extends Component {

    render() {
        return (
            <div className='section-share section-accessories'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Phu kien ban chay</span>
                        <button className='btn-section'>Xem them</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-accessories' />
                                <div>Phu kien 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-accessories' />
                                <div>Phu kien 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-accessories' />
                                <div>Phu kien 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-accessories' />
                                <div>Phu kien 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-accessories' />
                                <div>Phu kien 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-accessories' />
                                <div>Phu kien 1</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Accessories);
