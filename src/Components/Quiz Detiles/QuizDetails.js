import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const {data} = useLoaderData();
    console.log(data.questions);

    return (
        <div>
            {
                data.questions.map( question => console.log(question))
            }
        </div>
    );
};

export default QuizDetails;