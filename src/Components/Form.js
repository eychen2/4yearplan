import React from 'react'

const Form = ({setInputText, inputText,elements,setElements, count, setCount}) =>{
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const addNode = (e) => {
        e.preventDefault();
        setElements([...elements, {id: inputText, type:'input',data: {label: inputText},position:{x:0,y:200},style:{height: 10, width:80}}]);
        setInputText("");
    };
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="appInput" placeholder="Add Class" />
            <button onClick={addNode} className="submitButton" type="submit" > Add </button>
        </form>
    )
}
export default Form;