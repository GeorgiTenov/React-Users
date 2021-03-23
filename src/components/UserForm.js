import {useState,useEffect} from "react";
function UserForm({onAdd}){
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");

    function onSubmit(e){
        e.preventDefault();
        onAdd({firstName,lastName});
    }

return(
    <div className="form-container">
        <form  className="form" onSubmit={onSubmit}>
            <p className="name">First Name:</p><input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
            <br></br>
            <p className="name">Last Name:</p><input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
            <br></br>
            <input className="submit" type="submit"/>
        </form>
    </div>
)
}

export default UserForm;