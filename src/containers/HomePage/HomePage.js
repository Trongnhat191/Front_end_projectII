import { divide } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Field from './Section/Field';

class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <Field/>
                <div style ={{height: '300px'}}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
