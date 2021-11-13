import {} from "react-flow-renderer"
export default function highlightnodes(elements)
{
    const newElements = elements.map((e) => {
        if(e.id==='1')
        {
            console.log(e.position)
            return{...e,position: e.position, id: '2',data: {label: 'test'}};
        }
        else if(e.id === '2')
            return{...e,id: '1', data: {label: 'test2'}}
        else if(e.id==='abc')
            return{...e,id: 'def', data: {label: 'def'}}
        else if(e.id==='def')
            return{...e, id: 'abc', data: {label: 'abc'}}
        else
            return{...e}

    })
    return newElements;
}