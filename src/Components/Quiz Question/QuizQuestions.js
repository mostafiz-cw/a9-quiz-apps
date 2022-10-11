import React from 'react';
import Option from '../Options/Option';

const QuizQuestions = ({question}) => {
    console.log(question);
    return (
        <div className="container bg-white mx-auto mb-6 pl-6">
            <h1 className="text-3xl py-10 text-center">{question.question}</h1>
            <div className="flex justify-center">
                <div>
                {
                    question.options.map(option => <Option option={option}></Option>)
                }
                </div>
            </div>
        </div>
    );
};

export default QuizQuestions;