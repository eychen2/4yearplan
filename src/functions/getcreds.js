export default function getcreds(elements,CISE_Courses,posX)
{
    let creds=0;
    for(let i in elements)
    {
        if(elements[i].position.x===posX)
        {
            var index = CISE_Courses.findIndex(x=> x.code===elements[i].id||x.code===elements[i].id.substr(0,elements[i].id.length-1))
            if(index!==-1)
            {
                creds+=CISE_Courses.at(index).credit
            }
        }
    }
    return creds;
}