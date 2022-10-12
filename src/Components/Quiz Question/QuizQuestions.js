import React from 'react';
import Option from '../Options/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import Alert from '../Modal Alert/Alert';

const QuizQuestions = ({question}) => {
    // console.log(question.correctAnswer);
    return (
        <div className="container bg-white mx-auto mb-6 pl-6">
            <h1 className="text-3xl py-10 text-center text-violet-800 font-semibold">{question.question}</h1>
            <div className="flex justify-center">
                <div>
                {
                    question.options.map(option => <Option option={option} correctAnswer={question.correctAnswer}></Option>)
                }
                </div>
            </div>
            <div className="flex justify-center pb-6">
            <button onClick={()=> Alert(question.correctAnswer)}><EyeIcon title="See Correct Answer" className="h-6 w-6 text-blue-500"/></button>
            </div>
        </div>
    );
};

export default QuizQuestions;