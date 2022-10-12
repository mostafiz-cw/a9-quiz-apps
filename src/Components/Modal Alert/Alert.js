import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Alert = () => {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
        title: <strong>Good job!</strong>,
        html: <i>You clicked the button!</i>,
        icon: 'success'
      })
    
    
    return (
        <div>
        
        </div>
    );
};

export default Alert;