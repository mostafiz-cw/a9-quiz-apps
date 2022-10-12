import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Alert2 = (correctAnswer,event) => {
    const answerInnerText = event.target.innerText;
    // console.log(correctAnswer,answerInnerText);
    const MySwal = withReactContent(Swal)
    if (correctAnswer === answerInnerText) {
        // console.log('correct');
        MySwal.fire({
            title: <strong>Good Job</strong>,
            html: <i>Right Answer</i>,
            icon: 'success'
          })
    }
    else{
        MySwal.fire({
            title: <strong>Oops...</strong>,
            html: <i>Wrong Answer</i>,
            icon: 'error'
          })
    }
    
    // console.log(event.target.innerText);
    return (
        <div>
            
        </div>
    );
};

export default Alert2;