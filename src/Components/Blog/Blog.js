import React from 'react';

const Blog = () => {
    return (
        <div className="container mx-auto bg-indigo-50">
            <h1 className="text-center text-4xl py-8 font-bold">React Router Question And Answer</h1>
            <div className="mb-9 bg-violet-300 text-justify rounded">
                <h1 className="font-semibold text-3xl py-5 text-center">What is the purpose of React Router?</h1>
                <p className="pb-5 text-xl px-10">At its core, what React Router does is conditionally render certain components to display depending on the route being used in the URL ( / for the home page, /about for the about page, etc.). React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.</p>
            </div>
            <div className="mb-9 bg-violet-300 text-justify rounded">
                <h1 className="font-semibold text-3xl py-5 text-center">What is the context API?</h1>
                <p className="pb-5 text-xl px-10">Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            </div>
            <div className="mb-9 bg-violet-300 text-justify rounded">
                <h1 className="font-semibold text-3xl py-5 text-center">What is the useRef Hook in react?</h1>
                <p className="pb-5 text-xl px-10">The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;