import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
function Users(){
    const [users,setUsers] = useState([]);
    const [user,setUser]=useState({});
    
  useEffect(()=>{
    fetch("https://reqres.in/api/users")
  .then(res => res.json())
  .then(result => setUsers(result.data));
  },[]);

  function deleteUser(id){
    fetch(`https://reqres.in/api/users/${id}`,{
      method:"DELETE",
  }).then(res => {console.log(res)})
  .then(data => console.log(data));

    let filteredUsers = users.filter(u => u.id !== id);
    setUsers(filteredUsers);
  }

  return (<div> <div className="add-user-container"><Link to="/addUser" className="add-user">Add User</Link></div><ul className="users-ul">
  {  users.map((u,index) => (
    <li key={index}><Link to={`/user/${u.id}`}>
      <img src={u.avatar}></img>
      </Link><button className="delete" onClick={()=>deleteUser(u.id)}>Delete User</button></li>
    
  ))}
</ul></div>)
    
  }
  


export default Users;