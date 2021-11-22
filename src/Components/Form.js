import React, {useState} from 'react'
var CISE_Courses=require('../data/Courses.js');

const Form = ({setInputText, inputText, elements,setElements}) =>{
    const [inputs, setInputs] = useState({});
    const inputTextHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    };
    const addNode = (e) => {
        e.preventDefault();
        var index = elements.findIndex(x=>x.id===inputs.code)
        if(index===-1)
        {
            setElements([...elements, {id: inputs.code, type:'input',data: {label: inputs.code},position:{x:1250,y:200},style:{height: 10, width:80}}]);
            CISE_Courses.push({
                code: inputs.code,
                name: "",
                credit: parseInt(inputs.num),
                description: "An inputted class",
                preReqs: [],
                yearReq: "-"
            })
        }
        setInputs({code: "", num: ""})
    };
    return(
        <form>
            <input name="code" value={inputs.code} onChange={inputTextHandler} type="text" className="appInput" placeholder="Add Class" />
            <input name="num" value={inputs.num} onChange={inputTextHandler} type="number" className="appInput" placeholder="Add Credits" />
            <button onClick={addNode} className="submitButton" type="submit" > Add </button>
        </form>
    )
}
export default Form;