import React from 'react';
import Option from '../Options/Option';

const QuizQuestions = ({question}) => {
    console.log(question);
    return (
        <div className="container bg-white mx-auto">
            <h1>{question.question}</h1>
            {
                question.options.map(option => <Option option={option}></Option>)
            }
            
        </div>
    );
};

export default QuizQuestions;