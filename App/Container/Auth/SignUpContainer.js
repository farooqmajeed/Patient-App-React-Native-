import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignUp } from '../../Components';
import AuthActions from '../../Store/Actions/AuthActions';

class SignUpContainer extends Component {
    render() {
      return  <SignUp signup={this.props.signUp} navigation={this.props.navigation} userData={this.props.authObj} />
    }
}

const mapStateToProps = (state) => {
    return { authObj: state.AuthReducer };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (userObj) => dispatch(AuthActions.signup(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);