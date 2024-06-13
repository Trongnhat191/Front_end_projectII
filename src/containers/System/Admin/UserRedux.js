import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import * as actions from '../../../store/actions';
import { first } from 'lodash';
import TableManeaUser from './TableManageUser';
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            roleArr: [],

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            role: '',

        };
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getRoleStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux;
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : '',
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux;
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : '',
            })
        }
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) return;

        //fire action redux
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            gender: this.state.gender,
            role: this.state.role,
        });

    }

    checkValidateInput = () => {
        let idValis = true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address'];
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                idValis = false;
                alert('Missing parameter: ' + arrCheck[i]);
                break;
            }
        }
        return
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        }, () => {
            console.log('check state after change: ', this.state);

        });
    }


    render() {
        console.log('check state: ', this.state);
        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let isGetGenders = this.props.isLoadingGender;
        let { email, password, firstName, lastName, phoneNumber, address, gender, role } = this.state;

        console.log('check props from redux: ', this.state);
        return (
            <div>
                <div className="user-redux-container" >
                    <div className='title'>
                        User Redux Nhat Nguyen Trong
                    </div>
                    <div>{isGetGenders === true ? 'Loading genders' : ''}</div>
                    <div className='user-redux-body'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 my-3'> Thêm mới người dùng</div>
                                <div className='col-3'>
                                    <label>Email</label>
                                    <input className='form-control' type='email'
                                        value={email}
                                        onChange={(event) => { this.onChangeInput(event, 'email') }}
                                    />
                                </div>
                                <div className='col-3'>
                                    <label>Password</label>
                                    <input className='form-control' type='password'
                                        value={password}
                                        onChange={(event) => { this.onChangeInput(event, 'password') }}
                                    />
                                </div>
                                <div className='col-3'>
                                    <label>First Name</label>
                                    <input className='form-control' type='text'
                                        value={firstName}
                                        onChange={(event) => { this.onChangeInput(event, 'firstName') }} />
                                </div>
                                <div className='col-3'>
                                    <label>Last Name</label>
                                    <input className='form-control' type='text'
                                        value={lastName}
                                        onChange={(event) => { this.onChangeInput(event, 'lastName') }} />
                                </div>
                                <div className='col-3'>
                                    <label>Phone number</label>
                                    <input className='form-control' type='text'
                                        value={phoneNumber}
                                        onChange={(event) => { this.onChangeInput(event, 'phoneNumber') }} />
                                </div>
                                <div className='col-9'>
                                    <label>Address</label>
                                    <input className='form-control' type='text'
                                        value={address}
                                        onChange={(event) => { this.onChangeInput(event, 'address') }} />
                                </div>
                                <div className='col-3'>
                                    <label>Gender</label>
                                    <select className='form-control'
                                        // value={email}
                                        onChange={(event) => { this.onChangeInput(event, 'gender') }}
                                    >
                                        {genders && genders.length > 0 &&
                                            genders.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.key}> {item.value}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label>RoleId</label>
                                    <select className='form-control'
                                        onChange={(event) => { this.onChangeInput(event, 'role') }}
                                    >
                                        {roles && roles.length > 0 &&
                                            roles.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.key}>{item.value}</option>);
                                            })}
                                    </select>
                                </div>
                                <div className='col-12 mt-3'>
                                    <button className='btn btn-primary' onClick={() => this.handleSaveUser()}>
                                        Save
                                    </button>
                                </div>
                                <div className='col-12'>
                                    <TableManeaUser />

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
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        // processLogout: () => dispatch(actions.processLogout()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
