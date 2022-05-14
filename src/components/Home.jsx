import React from 'react'
import { useUserAuth } from '../Context/UserAuthContext'

function Home() {
  const { user, logOut } = useUserAuth();
  
  const logout = async () => {
    try {
      await logOut();
    } catch(err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <div class="card w-50 mx-auto">
        <div class="card-body">
          <h4 class="card-title">Welcome home  !<br/> 
          </h4>
          <em className=''>{ user && user.email}</em> 
          <div class="d-grid gap-2 mt-3">
            <button type="button" 
                     class="btn btn-secondary"
                     onClick={ logout }
                     >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home