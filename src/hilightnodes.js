import {} from "react-flow-renderer"
export default function highlightnodes(elements, prereqs)
{
    const newElements = elements.map((e) => {
        if(e.id.length === 8)
        {
            console.log(e.id)
            return{...e,id: e.id.susbstr(0,7), style: {background: "white"}}
        }
        else if(prereqs.indexOf(e)!==-1)
        {
            console.log(e.id)
            return{...e, id: e.id+'_', style: {background: "#166DBA", color: "white"}};
        }
        else
            return{...e}

    })
    return newElements;
}