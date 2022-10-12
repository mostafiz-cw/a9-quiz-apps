import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [totalQuiz, settotalQuiz] = useState([]);
    
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(response => response.json())
        .then(data => {
            const quizData = data.data;
            const processData = quizData.map(data => {
                const {name, total} = data;
                const quizTotal = {
                    name: name,
                    Total: total
                };
                return quizTotal;
            })
            
            
            settotalQuiz(processData);
            
        });
    }, [])
    console.log(totalQuiz);
    return (
        <div>
            <BarChart className="mx-auto" width={500} height={440} data={totalQuiz}>
          <Bar dataKey="Total" fill="#504AC6" />
          <XAxis dataKey="name"/>
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default Statistics;