import UserForm from "./UserForm";
import {useState,useEffect} from "react";
function AddUser(){
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");

    useEffect(()=>{

        if(firstName && lastName !== ""){
           addUser();
      
    }},[firstName,lastName]);
   
    function addUser(){
        fetch(`https://reqres.in/api/users/`,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({
                firstName:firstName,
                lastName:lastName,
            })

        }).then(res => res.json())
        .then(data => console.log(data));
    }
    

    function onAdd(firstName,lastName){
       setFirstName(firstName);
       setLastName(lastName);
    }
    return(
        <div>
            <UserForm onAdd={onAdd}></UserForm>
        </div>
    )
}


export default AddUser;