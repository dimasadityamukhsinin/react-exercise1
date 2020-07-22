import React from 'react';


const dataToDo = () => {
    let toDo = ['Belajar Intro React JS', 'Belajar Component React JS', 'Belajar Route React JS'];

    let result = toDo.map((element) => <li>{element}</li>);
    return(
        <>
            <ul>
                {result}
            </ul>
        </>
    );
}

export default dataToDo;