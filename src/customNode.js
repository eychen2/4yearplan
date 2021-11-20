import {removeElements} from "react-flow-renderer";
import React from 'react'

let stuMajor = '';

export default ({ data }) => {
    const clickCSE = () => {
        console.log('CSE');
        stuMajor = 'CSE'
    };
    const clickCSC = () => {
        console.log('CSC');
        stuMajor = 'CSC'
    };
    const clickDAS = () => {
        console.log('DAS');
        stuMajor = 'DAS'
    };

    return (
        <div
            style={{
                justifyContent: 'center',
                border: '1px solid blue',
                textAlign: 'center',
                padding: 10,
                fontSize: '1.2rem',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                {data.label}
                <p></p>
                <button onClick={clickCSE}>Computer Science (CSE)</button>
                <p></p>
                <button onClick={clickCSC}>Computer Science (CSC)</button>
                <p></p>
                <button onClick={clickDAS}>Digital Arts and Sciences (DAS)</button>
                <p></p>
            </div>
        </div>
    );
};
