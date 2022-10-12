import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const quizTopics = useLoaderData()
    // console.log(quizTopics);
    return (
        <div className="bg-indigo-50 pb-16">
            <div className="container h-52 border-2 border-indigo-600 mx-auto my-7">
                <h1 className="text-center py-7 m-6 md:font-bold md:text-5xl text-white bg-indigo-700">Hello Welcome To The Frontend Quiz</h1>
                <p className="text-center md:text-lg">Hello Everyone, let's try your knowledge. Are you ready for the challange? Let's jump into the quiz and test your skills.</p>

            </div>
            <div className="flex md:flex-row flex-col container mx-auto gap-5">
            {
                quizTopics.data.map(topic => <Topic key={topic.id}
                topic={topic}></Topic>)
            }
            </div>
        </div>
    );
};

export default Topics;