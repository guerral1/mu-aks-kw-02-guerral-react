import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../services/user-service';
import InfoPanel from './InfoPanel';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem('user'))
    });
  }

  handleLogout() {
    logout();
  }

  render() {
    const { user } = this.state;

    if (user.data) {
      return (
        <div>
          <h2>Hello {user.data.first_name}!</h2>
          <h2>Welcome to Security Engineering!!</h2>
          <br />
          <p>While you're here, feel free to take a look around and make sure you click every where!</p>
          <br />
          <br />
          <br />
          <InfoPanel data={user.data} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>
            <Link to="/logout">
              <span onClick={this.handleLogout}>Logout</span>
            </Link>
          </p>
        </div>


      );
    } else {
      return (<div>
        <p>Nothing to see here.</p>
      </div>);
    }

  }
}

export default HomePage;
