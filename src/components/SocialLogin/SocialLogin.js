import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';

import '../../css/SocialLogin.css';
//TODO comment out
// import config from '../../config.json';


class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      isAuthenticated: false,
      user: null,
      token:'',
    };
  }

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user:    null})
  };
  
  onFailure = (error) => {
    alert(error);
  };
  
  facebookResponse = (response) => {
    console.log(response);
  };
  
  googleResponse = (response) => {
    console.log(response);
  };

  render(){
    let content = !!this.state.isAuthenticated ?
      (
          <div>
              <p>Authenticated</p>
              <div>
                  {this.state.user.email}
              </div>
              <div>
                  <button onClick={this.logout} className="button">
                      Log out
                  </button>
              </div>
          </div>
      ) :
      (

        <div className="social-login--container">
        <h2 className='app-name'>Thykhe</h2>
        <div className='social-login-buttons'>

        <h4>Faça seu login:</h4>
              
              <GoogleLogin
              //TODO go back to .env
                  clientId={process.env.GOOGLE_CLIENT_ID}
                  // clientId={config.GOOGLE_CLIENT_ID}
                  buttonText="Login with Google Account"
                  onSuccess={this.googleResponse}
                  onFailure={this.onFailure}
              />
              <FacebookLogin
              //TODO go back to .env
                  appId={process.env.FACEBOOK_APP_ID}
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={this.facebookResponse}
                  icon="fa-facebook" />

                  <Link className='invisible-link' to='/user-profile'>PROFILE</Link>

   

          </div>
        </div>
          
      );
    return(
      <div className="App">
      {content}
      </div>
    )
  }
}

export default Home;

// facebookResponse = (response) => {
//   const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
//   const options = {
//       method: 'POST',
//       body: tokenBlob,
//       mode: 'cors',
//       cache: 'default'
//   };
//   fetch('http://localhost:4000/api/v1/auth/facebook', options).then(r => {
//       const token = r.headers.get('x-auth-token');
//       r.json().then(user => {
//           if (token) {
//               this.setState({isAuthenticated: true, user, token})
//           }
//       });
//   })
// };

// googleResponse = (response) => {
//   const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
//   const options = {
//       method: 'POST',
//       body: tokenBlob,
//       mode: 'cors',
//       cache: 'default'
//   };
//   fetch('http://localhost:4000/api/v1/auth/google', options).then(r => {
//       const token = r.headers.get('x-auth-token');
//       r.json().then(user => {
//           if (token) {
//               this.setState({isAuthenticated: true, user, token})
//           }
//       });
//   })
// };