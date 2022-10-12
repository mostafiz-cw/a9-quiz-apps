import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Alert = (correctAnswer) => {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
        title: <strong>Correct answer is</strong>,
        html: <i>{correctAnswer}</i>,
        icon: 'success'
      })
    
    
    return (
        <div>
        
        </div>
    );
};

export default Alert;