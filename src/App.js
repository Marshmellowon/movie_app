import React from 'react';

function Food({fav}) {
    return <h1>I like {fav}</h1>

}

const foodIlike = [
    {
        name: "aa",
        img: "dd"
    },
    {
        name: "qq",
        img: "ww"
    },
    {
        name: "ee",
        img: "rr"
    },
    {
        name: "tt",
        img: "yy"
    },
]

function App() {
    return (
        <div>
            <h1>hello</h1>
            {
                foodIlike.map(func =>
                    <Food fav={func.name}/>
                )
            }
        </div>
    );
}

export default App;
