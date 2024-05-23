import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import * as actions from '../../../store/actions';

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            roleArr: [],
        };
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getRoleStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
    }
    render() {
        console.log('check state: ', this.state);
        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let isGetGenders = this.props.isLoadingGender;

        console.log('check props from redux: ', this.state);
        return (
            <div>
                <div className="user-redux-container" >
                    <div className='title'>
                        User Redux Nhat Nguyen Trong
                    </div>
                    <div>{isGetGenders === true ? 'Loading genders': ''}</div>
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
                                {/* <div className='col-3'>
                                    <label>Position</label>
                                    <select className='form-control' >
                                        <option selected> Choose ...</option>
                                        <option>...</option>
                                    </select>
                                </div> */}
                                <div className='col-3'>
                                    <label>RoleId</label>
                                    <select className='form-control' >
                                        {roles && roles.length > 0 && roles.map((item, index) => {
                                            return (<option key = {index}>
                                                {item.value}
                                            </option>);
                                        })}
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
        isLoadingGender: state.admin.isLoadingGender,
        roleRedux: state.admin.roles,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        // processLogout: () => dispatch(actions.processLogout()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
