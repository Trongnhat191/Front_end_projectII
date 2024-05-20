import { divide } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeFooter extends Component {
    render() {
        
        return (
            <div className='home-footer'> <p>&copy; 2024 Nhat. <a href ="#">More information, please contact me Nhat.NT215625@sis.hust.edu.vn</a></p></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
