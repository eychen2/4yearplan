import {} from "react-flow-renderer"
import highlightnodes from "./hilightnodes"
export default function removeElement(elements,node,prereqs)
{
    let newElements=highlightnodes(elements,prereqs)
    newElements=newElements.filter(x=>x.id!==node.id)
    return newElements
}