import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from '../../Components'
import AuthActions from '../../Store/Actions/AuthActions';

class LoginContainer extends Component {

    render() {
        return <Login user={this.props.authObj} navigation={this.props.navigation} login={this.props.login} />
    }
}

const mapStateToProps = (state) => {
    return { authObj: state.AuthReducer };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userObj) => dispatch(AuthActions.login(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
