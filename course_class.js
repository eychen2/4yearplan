//CISE_Courses
//Course Code,Name,GradingScheme,Credits,Description,Prerequisites,YearRequirement
class Course{
    set CourseCode(CourseCode){
        this.code=CourseCode;
    }
    set Name(Name){
        this.name=Name;
    }
    set GradingScheme(GradingScheme){
        this.grading=GradingScheme;
    }
    set Credits(Credits){
        this.creds=Credits;
    }
    set Description(Description){
        this.des=Description;
    }
    set Prerequisites(Prerequisites){
        this.preReq=Prerequisites;
    }
    set YearRequirement(YearRequirement){
        this.yearReq=YearRequirement;
    }
    constructor(){
    }
}

let course_class=[];// Array to store Course Objects
const csv=require('csvtojson')
// Invoking csv returns a promise
const converter=csv()
    .fromFile('./CISE_Courses.csv')
    .then((json)=>{
        let c;
        json.forEach((row)=>{
            c=new Course();// New Course Object
            Object.assign(c,row);// Assign json to the new Course
            course_class.push(c);// Add the Course to the Array

        });
    }).then(()=>{
        course_class.forEach((co)=>{
            console.log(co.code);// Invoke the getter
        });
    });


