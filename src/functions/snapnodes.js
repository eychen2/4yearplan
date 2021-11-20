import {} from "react-flow-renderer"
import {distance} from 'mathjs';
export default function highlightnodes(elements,snapDistance,snapLocation,node)
{
    const newElements = elements.map((e) => {
        if(e.id===node.id)
        {
            var index = elements.findIndex(x => x.id === node.id)
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
        node.position=snapLocation[smallIndex]
        elements[index].position=snapLocation[smallIndex]
            return{...e,position:snapLocation[smallIndex]}
        }
        else
        {
            return{...e}
        }

    })
    return newElements;
}