import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { createComplaint } from '../api/complaintsApi';

function ComplaintForm() {
 const navigate = useNavigate();
    const [formData, setFormData] = useState({
        category:'אוכל',
        content:''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const MIN_LENGTH=10;

    const handleChange= (e)=>{
        const {name, value} = e.target;

        setFormData((prev) =>({
            ...prev,
            [name]:value
        }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");

        if (formData.content.trim().length< MIN_LENGTH){
            setError(`יש להזין לפחות ${MIN_LENGTH} תווים`);
            return;
        }
        try {
            setLoading(true);
            await createComplaint(formData);
            setSuccess(true);
            setFormData({
                category:'אוכל',
                content:""
            });
            setTimeout(()=>{
                navigate('/')
            }, 2000)
        } catch(err){
            setError('אירעה שגיאה במהלך שליחת התלונה');

        } finally {
            setLoading(false)
        }
    };
  return (
    <div className='submit-Page'>
        <h1>שליחת תלונה אנונימית</h1>
      {success && (<div className='success-message'>התלונה נשלחה בהצלחה!</div>)}
      <form onSubmit={handleSubmit}>
        <label>קטגוריה</label><br />
        <select name="category" value={formData.category} onChange={handleChange}>
            <option value="אוכל">אוכל</option>
            <option value="ציוד">ציוד</option>
            <option value="פקודות">פקודות</option>
            <option value="אחר">אחר</option>
        </select><br />
        <label>תוכן התלנה</label><br />
        <textarea name="content" value={formData.content} onChange={handleChange} rows='6' placeholder='כתוב כאן את פרטי התלונה...'></textarea><br />

        {error && <div className='error-message'>{error}</div>}
        <button type='submit' disabled={loading}>
            {loading ? 'שלח תלונה': 'שולח...'}
        </button>
      </form>
    </div>
  )
}

export default ComplaintForm
