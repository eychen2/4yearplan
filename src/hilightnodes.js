import {} from "react-flow-renderer"
export default function highlightnodes(elements, prereqs)
{
    const newElements = elements.map((e) => {
        if(e.id.slice(-1) === '_')
        {
            return{...e,id: e.id.substr(0,e.id.length-1), style: {background: "white"}}
            
        }
        else if(prereqs.indexOf(e.id)!==-1)
        {
            return{...e, id: e.id+'_', style: {background: "#166DBA", color: "white"}};
        }
        else
        {
            return{...e}
        }
    })
    return newElements;
}