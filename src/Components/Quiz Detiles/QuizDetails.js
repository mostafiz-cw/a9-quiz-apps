import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import QuizQuestions from '../Quiz Question/QuizQuestions';

const QuizDetails = () => {
    const {data} = useLoaderData();
    // console.log(data.questions);

    return (
        <div>
            <Navbar></Navbar>
            {/* <h1>Hello Quez</h1> */}
            <h1 className="text-center text-4xl my-5 font-bold">Quiz Of {data.name}</h1>
            {
                data.questions.map( question => <QuizQuestions key={question.id} question={question}></QuizQuestions>)
            }
        </div>
    );
};

export default QuizDetails;