import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmployeeCard from './EmployeeCard';
import DetailsCard from './DetailsCard';

class InfoPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.clearState()
    };
  }

  clearState() {
    return {
      employeeData: {},
      detailsData: {}
    }
  }

  componentDidMount() {
    // by default, we set the info panel to first load the basic information
    this.setState({ employeeData: this.props.data });
  }

  handleClick(e, child) {
    if (child === 'BasicRequired') {
      this.setState({
        ...this.clearState(),
        employeeData: this.props.data,
      });
    } else if (child === 'DetailedRequired') {
      this.setState({
        ...this.clearState(),
        detailsData: this.props.data,
      });
    }
  }

  render() {
    const { employeeData, detailsData } = this.state;
    if (employeeData && employeeData.employee_id) {
      return (
        <EmployeeCard data={employeeData} onClick={this.handleClick.bind(this)} />
      );
    } else if (detailsData && detailsData.employee_id) {
      return (
        <DetailsCard data={detailsData} onClick={this.handleClick.bind(this)} />
      );
    } else {
      return (
        <p>We are firing up all cyclinders...hang on tight!!</p>
      );
    }
  }
}

InfoPanel.propTypes = {
  data: PropTypes.object.isRequired
};

export default InfoPanel;
