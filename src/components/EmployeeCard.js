import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getEmployee } from '../services/user-service';


class EmployeeCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {}
    };
  }

  async componentDidMount() {
    this.setState({
      details: await getEmployee(this.props.data.employee_id)
    });
  }

  render() {
    const { details } = this.state;
    if (details.employee_id) {
      return (
        <div>
          <Link to='/'>
            <p onClick={(e) => this.props.onClick(e, 'DetailedRequired')}>Detailed Information</p>
          </Link>
          <table>
            <tbody>
              <tr>
                <td>
                  <h3> General Information </h3>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Employee ID: {details.employee_id}</p>
                  <p>First Name: {details.first_name}</p>
                  <p>Last Name: {details.last_name}</p>
                  <p>DOB: {details.dob}</p>
                  <p>Title: {details.title}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <p>Hang in tight while we format your harddrive...just kidding!</p>
      );
    }
  }
}

EmployeeCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default EmployeeCard;
