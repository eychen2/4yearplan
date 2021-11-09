import {} from "react-flow-renderer"
export default function highlightnodes(elements)
{
    const newElements = elements.map((e) => {
        if(e.id==='1')
            return{...e, id: '2',data: {label: 'test'}};
        if(e.id === '2')
            return{...e,id: '1', data: {label: 'test2'}}
        return{...e};
    })
    return newElements;
}