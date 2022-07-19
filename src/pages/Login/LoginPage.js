/// @author: Bertan Berker
/// @Design is inspired by: https://designseer.com/css-html-login-form-templates/ (Minimalistic Login Form with CSS)
/// This is the login/sign-up page for the coffee shop: CENTRAL PERK :)

import './style.css';
import './animate.css'
import React from 'react';
import { useNavigate} from 'react-router-dom';

function LoginPage() {
  
	const navigate = useNavigate();

	const login = () => {
		navigate('/HomePage');
	  };


return (

    <>
    <head>
      <title>CENTRAL PERK</title>
    </head>

<body>
	<div class="container">
		<div class="top">
			<h1 id="title" class="hidden"><span id="logo">CENTRAL<span> PERK</span></span></h1>
		</div>
		<div class="login-box animated fadeInUp">
			<div class="box-header">
				<h2>Log In</h2>
			</div>
			<label for="username">Username</label>
			<br/>
			<input type="text" id="username"></input>
			<br/>
			<label for="password">Password</label>
			<br/>
			<input type="password" id="password"></input>
			<br/>
			<button type="submit" onClick= {login} >Sign Up</button>
		</div>
	</div>
</body>

</>
  );
}

export default LoginPage;