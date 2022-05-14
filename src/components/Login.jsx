import React, { useState } from 'react';
import { useUserAuth } from '../Context/UserAuthContext';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { logIn, googleSignIn  } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      navigate('/home');
    }catch(err){
      setError(err.message);
    };
  }

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/home');
    } catch(err) {
      setError(err.message)
    }
  }


  return (
    <>
    <div className='p-4 box'>
      <h3 className='mb-3 text-center'>Firebase Auth LogIn</h3>
      <form onSubmit={handleSubmit}>
        <div className='col-md-5 m-auto'>
      { error && <div class="alert alert-danger" role="alert">{error}</div>}
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Log-In</h4>
            <p class="card-text">
              <div class="mb-3">
                <label for="" class="form-label">E-mail</label>
                <input type="email"
                        class="form-control"
                          placeholder="E-mail"
                          onChange={ (e) => setEmail(e.target.value)}/>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Password</label>
                <input type="password"
                        class="form-control"
                          placeholder="Password"
                          onChange={ (e) => setPassword(e.target.value)}/>
              </div>
              <div class="d-grid gap-2">
                <button type="submit" name="" id="" class="btn btn-primary">
                  LogIn
                </button>
              </div>
            </p>
          </div>
        </div>
      <div className='card'>
        <div className='card-body m-auto'>
          <GoogleButton onClick={ signInWithGoogle }/>
        </div>
      </div>
      <div class="card">
        <div class="card-body text-center">
          <p className=''>First Time here ? <Link to='/signup'>SignUp</Link> </p>
        </div>
      </div>
        </div>
      <p className='text-center mt-4'>Forgot password ? <Link to='/forgot-password'>Reset password</Link></p>
      </form>
    </div>
    </>
  )
}

export default Login