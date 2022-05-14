import React, { useState } from 'react'
import { Alert, Button, Form, FormGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';

function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useUserAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try{
      await signUp(email, password);
      navigate("/");
    }catch(err) {
      setError(err.message);
    } 
  }
  return (
    <>
    <div className='p-4 box'>
      <h3 className='mb-3 text-center'>Firebase Auth Signup</h3>
      <form onSubmit={handleSubmit}>
        <div className='col-md-5 m-auto'>
      { error && <div class="alert alert-danger" role="alert">{error}</div>}
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Signup</h4>
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
                  Signup
                </button>
              </div>
            </p>
          </div>
        </div>
        <div class="card">
        <div class="card-body text-center">
          <p className=''>Already have an Account ? <Link to='/'>LogIn</Link> </p>
        </div>
      </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Signup