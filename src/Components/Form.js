import React from 'react'

const Form = ({setInputText, inputText,elements,setElements}) =>{
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const addNode = (e) => {
        e.preventDefault();
        var index = elements.findIndex(x=>x.id===inputText)
        if(index===-1)
            setElements([...elements, {id: inputText, type:'input',data: {label: inputText},position:{x:1250,y:200},style:{height: 10, width:80}}]);
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