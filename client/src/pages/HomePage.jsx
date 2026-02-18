import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function HomePage() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const adminAccess = (e) =>{
        e.preventDefault();
        if (!password.trim()) return;
        navigate('/admin/login')
    }

  return (
    <div className='home-page'>
        <section className='intro'>
            <h1>מערכת קבלת תלונות</h1>
            <p>מערכת זו מאפשרת שליחת תלונות בצורה מסודת ומעקב אחר הטיפול בהן. <br />ניתן לשלוח תלונה באופן פשוט ומהיר דרך הטופס הייעודי</p>
            <button className='primary-btn' onClick={()=>navigate('/submit')}>שליחת תלונה</button>
        </section>
        <section className='admin-section'>
            <h3>מפקדים בלבד!</h3>
            <form onSubmit={adminAccess}>
                <input type="password" placeholder='הכנס סיסמה' value={password} onChange={e =>setPassword(e.target.value)}/>
                <button type='submit'>כניסת מפקד</button>
            </form>

        </section>
    </div>
  )
}

export default HomePage
