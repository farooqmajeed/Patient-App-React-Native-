import React, { Component } from "react";
import { connect } from "react-redux";
import { PatientList } from "../../Components/index";
import AppActions from "../../Store/Actions/AppActions";
import { AsyncStorage } from "react-native";
class PatientListContainer extends Component {
    static navigationOptions = {
        tabBarLabel: 'Patient List',
    };
    state = {
        data: ""
    }
    searchingArray = (arr) => {
        console.log(JSON.parse(this.state.data), arr);
    }
    componentWillReceiveProps(newProps) {
        this.setState({ data: newProps.patientList.data })
    }
    componentWillMount() {
        this.props.list();
    }
    render() {
        return <PatientList deletes={this.props.delete} search={this.props.search} navigation={this.props.navigation} data={this.state.data} />
    }
}

const mapStateToProps = (state) => {
    return { patientList: state.AppReducer };
};
const mapDispatchToProps = (dispatch) => {
    return {
        list: () => dispatch(AppActions.getPatient()),
        search: (value) => dispatch(AppActions.searchPatient(value)),
        delete: (val) => dispatch(AppActions.removedPatient(val))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientListContainer);