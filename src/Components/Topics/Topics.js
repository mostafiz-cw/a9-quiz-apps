import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const quizTopics = useLoaderData()
    console.log(quizTopics);
    return (
        <div>
            <h1>This is Quiz Side {quizTopics.data.length}</h1>
            <div className="flex container mx-auto gap-5">
            {
                quizTopics.data.map(topic => <Topic key={topic.id}
                topic={topic}></Topic>)
            }
            </div>
        </div>
    );
};

export default Topics;