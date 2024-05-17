import { divide } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Accessories.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

class Accessories extends Component {

    render() {
        return (
            <div>
                Accessories
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
