import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import * as actions from '../../../store/actions';

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        };
    }

    async componentDidMount() {
        this.props.getGenderStart();
        // try {
        //     let res = await getAllCodeService('gender');
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        //     console.log('check res from', res);
        // } catch (error) {
        //     console.log(error);
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
    }
    render() {
        console.log('check state: ', this.state);
        let genders = this.state.genderArr;
        console.log('check props from redux: ', this.props.genderRedux);
        return (
            <div>
                <div className="user-redux-container" >
                    <div className='title'>
                        User Redux Nhat Nguyen Trong
                    </div>
                    <div className='user-redux-body'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 my-3'> Thêm mới người dùng</div>
                                <div className='col-3'>
                                    <label>Email</label>
                                    <input className='form-control' type='email' />
                                </div>
                                <div className='col-3'>
                                    <label>Password</label>
                                    <input className='form-control' type='password' />
                                </div>
                                <div className='col-3'>
                                    <label>First Name</label>
                                    <input className='form-control' type='text' />
                                </div>
                                <div className='col-3'>
                                    <label>Last Name</label>
                                    <input className='form-control' type='text' />
                                </div>
                                <div className='col-3'>
                                    <label>Phone number</label>
                                    <input className='form-control' type='text' />
                                </div>
                                <div className='col-9'>
                                    <label>Address</label>
                                    <input className='form-control' type='text' />
                                </div>
                                <div className='col-3'>
                                    <label>Gender</label>
                                    <select className='form-control' >
                                        {genders && genders.length > 0 &&
                                            genders.map((item, index) => {
                                                return (

                                                    <option key = {index}> {item.value}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label>Position</label>
                                    <select className='form-control' >
                                        <option selected> Choose ...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label>RoleId</label>
                                    <select className='form-control' >
                                        <option selected> Choose ...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className='col-12 mt-3'>
                                    <button className='btn btn-primary'> Save </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        genderRedux: state.admin.genders,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        // processLogout: () => dispatch(actions.processLogout()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
