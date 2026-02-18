import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { createComplaint } from '../api/complaintsApi';
import ComplaintForm from '../component/ComplaintForm';

function SubmitComplaintPage() {
   
  return (
    <div className='submit-Page'>
        <ComplaintForm></ComplaintForm>

    </div>
  )
}

export default SubmitComplaintPage
