import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss'
import * as actions from '../../../store/actions';


class TableManageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers
            })
        }
    }

    handleDeleteUser = (userId) => {
        this.props.deleteAUserRedux(userId);
    }

    handleEditUser = (user) => {
        // console.log('check user edit', user)
        this.props.handleEditUserFromParentKey( user)

    }
    render() {
        console.log('check all users', this.props.listUsers)
        console.log('check state', this.state.usersRedux)
        let arrUsers = this.state.usersRedux;
        return (
            <table id='TableManageUser'>
                <tbody>
                    <tr>
                        <th>Email</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                    {arrUsers && arrUsers.length > 0 && arrUsers.map((item, index) => {
                        return (<tr key={index}>
                            <td>{item.email}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.address}</td>
                            <td>
                                <button
                                    onClick={() => this.handleEditUser(item)}
                                    className='btn-edit' ><i className="fas fa-pencil-alt"></i></button>
                                <button
                                    onClick={() => this.handleDeleteUser(item.id)}
                                    className='btn-delete' ><i className="fas fa-trash"></i></button>
                            </td>
                        </tr>)
                    })
                    }


                </tbody>
            </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux: (userId) => dispatch(actions.deleteAUser(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
