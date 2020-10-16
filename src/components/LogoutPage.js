import React from 'react';


class LogoutPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push({ pathname: "/login" });
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <p>You have successfully logged out.  To log in back, click on the Login button.</p>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogoutPage;
