import React, { useState } from 'react'
import { useUserAuth } from '../Context/UserAuthContext';

const ForgotPassword = () => {

  const [email, setEmail] = useState();
  const [error, setError] = useState('');
  const { resetPassword } = useUserAuth();
  const [send, setSend] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSend('');
    try{
      await resetPassword(email);
      setSend('reset link sent successfully ! ');
    } catch(err) {
      setError(err.message);
    }
  }
  return (
    <div>
      <form onSubmit={ handleSubmit }>
      <div class="card w-50 m-auto mt-10">
        <div class="card-header mb-3">
          Reset your password 
        </div>
        <div class="card-body">
          
          <div class="mb-3">
            <label for="" class="form-label">Enter your email (to reset password)</label>
            <input type="email"
             class="form-control" 
             placeholder="Enter email"
             onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-dark">
              Send
            </button>
          </div>
          <div className='mt-5 mx-auto text-center mb-3'>
          { error && <span className='alert alert-danger'>{error}</span>}
          { send && <span className='alert alert-success'>{ send }</span>} 
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default ForgotPassword