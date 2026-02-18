import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { adminConnect } from '../api/complaintsApi';

function AdminLoginPage() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');

        if (!password.trim()){
            setError('יש להזין סיסמה');
            return;
        }
        try{
            setLoading(true);
            const res = await adminConnect({password})
            localStorage.setItem('admintoken', res.data.token)
            navigate('/admin/complaints')
        } catch (err){
            setError('סיסמה שגויה, אין כניסה')
        } finally{
            setLoading(false);
        }
    };

  return (
    <div className='admin-login-page'>
      <h1>כניסת מנהל</h1>
      {error && <div className='error-message'>{error}</div>}

      <form onSubmit={handleSubmit}>
        <input type="password" placeholder='סיסמה' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button type='submit' disabled={loading}>
            {loading? 'התחברות' : 'מנסה להתחבר'}
        </button>
      </form>
    </div>
  )
}

export default AdminLoginPage
