import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getDetails } from '../services/user-service';


class DetailsCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {}
    };
  }

  async componentDidMount() {
    let data = await getDetails(this.props.data.employee_id);
    this.setState({
      details: data.fullDetails
    })
  }

  render() {
    const { details } = this.state;
    if (details.employee_id) {
      let fullDetailsInfo = details.fullDetailsInfo;
      return (
        <div>
          <Link to='/'>
            <p onClick={(e) => this.props.onClick(e, 'BasicRequired')}>Basic Information</p>
          </Link>
          <br />
          {fullDetailsInfo.map(fdi =>
            <div>
              <h3>{fdi.type}</h3>
              {fdi.details.map(fd => <li>{fd.description}</li>)}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <p>We are digging deep within the bowels of the internet to get your info...just kidding!</p>
      );
    }
  }
}

DetailsCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default DetailsCard;
