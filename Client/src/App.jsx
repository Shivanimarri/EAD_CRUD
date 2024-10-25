import React, {useState,useEffect} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[name,setStudentName]= useState("");
const[tech,setTechnology]= useState("");
const[sub,setSub]= useState("");
const[roll,setRoll]= useState("");
const[CGPA,setCgpa]= useState("");

const submitReview=async ()=>
{
await Axios.post('http://localhost:9000/student',
{name:name,
tech:tech,
sub:sub,
roll:roll,
CGPA:CGPA 
}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>Student Name </b></label>
<input
type="text"
name="name"
onChange={(e)=>{
  // console.log("e: ",e)
  // console.log("e.target: ",e.target)
setStudentName(e.target.value);
// console.log(name)
}}
required/>
<label><b>Technology</b></label>
<input
type="text"
name="tech"
onChange={(e)=>{
setTechnology(e.target.value);
}}
required/>
<label><b>SubScription</b></label>
<input
type="text"
name="sub"
onChange={(e)=>{
setSub(e.target.value);
}}
required/>
<label><b>CGPA</b></label>
<input
type="number"
name="CGPA"
onChange={(e)=>{
setCgpa(e.target.value);
}}
required/>
<label><b>Student Roll Number</b></label>
<input
type="number"
name="roll"
onChange={(e)=>{
  setRoll(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;
