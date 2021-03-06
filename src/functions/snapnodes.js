import {} from "react-flow-renderer"
import {distance} from 'mathjs';
export default function highlightnodes(elements,snapDistance,snapLocation,node,prereqs)
{
    const newElements = elements.map((e) => {
        if(e.id===node.id)
        {
            var smallIndex
            var smallVal=Number.MAX_VALUE
    
        //find distance between node and snap points
            for(let i=0; i<snapLocation.length; i++){
                snapDistance[i]=distance({pointOneX: node.position.x, pointOneY: node.position.y}, 
                {pointTwoX: snapLocation[i].x, pointTwoY: snapLocation[i].y})
                 //find smallest distance
                if(snapDistance[i]<smallVal){
                    smallVal=snapDistance[i]
                    smallIndex=i
                }
            }
            if(prereqs.size>0)
            {
                for(let item of prereqs)
                {   
                    var index = elements.findIndex(x=> x.id.substr(0,x.id.length-1)===item)
                    if(index!==-1&&elements[index].position.x>=snapLocation[smallIndex].x)
                    {
                        alert(e.id+" cannot be in the same semester or before "+elements[index].id.substr(0,elements[index].id.length-1))
                        return{...e,position:{x:e.position.x,y:e.position.y}}
                    }
                }
            }
            return{...e,position:snapLocation[smallIndex]}
        }
        else
        {
            return{...e}
        }

    })
    return newElements;
}