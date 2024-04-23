import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { every } from 'lodash';
import { handleLoginApi } from '../../services/userService';
import { adminLoginSuccess } from '../../store/actions/adminActions';

class Login extends Component {
    constructor(props) {
        super(props);

        //gia tri của state luon là 1 Object
        this.state = {
            username: '',
            password: ''
        }
    }

    //bắt sự kiện onchange khi thay đổi trường Username ở web
    handleOnChaneUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChanePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })//clear message moi lan request len server
        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
                console.log('login success')
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
            console.log('hoidanit', error.response)

        }
    }

    render() {
        return ( //chỉ có thể render 1 Element
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12  text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder='Enter your username'
                                // gia tri của this.state.username sẽ hiện ở trên Username của web
                                value={this.state.username}
                                onChange={(event) => this.handleOnChaneUsername(event)} />

                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder='Enter your password'
                                onChange={(event) => this.handleOnChanePassword(event)}></input>
                        </div>

                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>

                        <div className='col-12'>
                            <button className='btn-login' onClick={() => { this.handleLogin() }}>
                                Login
                            </button></div>
                        <div className='col-12'>
                            <span className='forgot-password'> Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>Or login with</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        //adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        //adminLoginFail: () => dispatch(actions.adminLoginFail()),
        //userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
