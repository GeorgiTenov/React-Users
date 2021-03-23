import {useParams,Link} from "react-router-dom";
import {useEffect,useState} from "react";
function User(){
    const {id} = useParams();
    const [user,setUser] = useState({});
    const [styles,setStyles] = useState(["style1","style2","style3"]);
    const [style,setStyle] = useState("");
    

    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${id}`)
        .then(res => res.json())
        .then(result => setUser(result.data))
        getRandomStyle();
      
    },[]);

    function getRandomStyle(){
        let randomStyle = styles[Math.floor(Math.random() * styles.length)];
        setStyle(randomStyle);
        return randomStyle;
    }

   

    return (
        <div>
            <h1 className={style}>{user.email}</h1>
            <p className="name">First Name:{user.first_name}</p>
            <p className="name">Last Name:{user.last_name}</p>
            <img src={user.avatar} className="user-img"></img>
        </div>
        
    )
}

export default User;