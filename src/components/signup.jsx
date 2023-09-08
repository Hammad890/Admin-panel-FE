import React from 'react'
import { Fragment,useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup(e) {
  const [userName,setUserName] =useState("");
  const [password,setPassword]= useState("");
  const [confirmPassword,setConfirmpassword]= useState("");
  const [userType,serUserType]= useState("");
  const [secretKey,setSecretKey]= useState("");
  const [userCount, setUserCount] = useState(0);
  const navigate= useNavigate();
    const styles={
        padding: "90px",
        border: "2px solid rgb(51, 54, 238)",
        height: "380px",
        width: "200px",
        float: "center",
        alignItems: "center",
        paddingBottom: "200px",
        paddingRight: "120px",
        marginTop: "50px",
    }
    const handleSignup =()=>{
      if(!userName || !password){
        alert("Please enter both password and username");
        return;
      }
      const exisitingUsers= localStorage.getItem('usernames');
      if (exisitingUsers && exisitingUsers.includes(userName)){
        e.preventDefault();
        alert("Username is already taken");
        return;
      }
      if(exisitingUsers){
        const updatedUsername= [...exisitingUsers.split(','),userName];
        localStorage.setItem('usernames',updatedUsername.join(',')); 
      }else{
        localStorage.getItem('usernames',userName);
      }
      if(userType === "Admin" && secretKey !== "web2.0"){
        e.preventDefault();
        alert("Invalid Admin");
        return;
      }
      localStorage.setItem('username',userName);
      localStorage.setItem('password',password);
      setUserCount(prevCount => prevCount + 1);
      navigate('/login');
    }
  return (
    <Fragment>
        <div className="log" style={styles}>
        <h1 style={{color:'rgb(51, 54, 238)',textAlign:'center'}}>SignUp</h1>
        Resgister As:- 
        <input type="radio" name="UserType" value="User" onChange={(e)=>{serUserType(e.target.value)}} /> User
        <input type="radio" name="UserType" value="Admin" onChange={(e)=>{serUserType(e.target.value)}} />Admin <br/>
        {userType === "Admin"? ( <label style={{color:'rgb(51, 54, 238)',fontSize:18+'px',fontWeight:"bold"}}>
          Secret Key:
          <input type="text" placeholder='secret key' onChange={(e)=>setSecretKey(e.target.value)} style={{margin: 12+'px',height:22+'px',width:250+'px'}} />
          </label>
          ) :null}
        <br />
        <label style={{color:'rgb(51, 54, 238)',fontSize:18+'px',fontWeight:"bold"}}>
        Name:
        <input type="text" placeholder="ahmed123" name='name' style={{margin: 12+'px',height:22+'px',width:250+'px'}}/>
        </label>
        <label style={{color:'rgb(51, 54, 238)',fontSize:18+'px',fontWeight:"bold"}}>
        Username:
        <input type="text" placeholder="ahmed123@gmail.com" name='username' value={userName} onChange={(e)=>{setUserName(e.target.value)}} style={{margin: 12+'px',height:22+'px',width:250+'px'}}/>
        </label>
        <br />
        <label style={{color:'rgb(51, 54, 238)',fontSize:18+'px',fontWeight:"bold"}}>
        Password:
        <input type="password" placeholder="********" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{margin:12+'px',height:22+'px',width:250+'px'}}/>
        </label>
        <label style={{color:'rgb(51, 54, 238)',fontSize:18+'px',fontWeight:"bold"}}>
        Confirm password:
        <input type="password" placeholder="********" name='password' value={confirmPassword} onChange={(e)=>setConfirmpassword(e.target.value)} style={{margin:12+'px',height:22+'px',width:250+'px'}}/>
        </label>
        <input type="button" value="Signup" onClick={handleSignup} style={{margin:12+'px',backgroundColor:'rgb(51, 54, 238)',color:"antiquewhite",height:30+'px',width:80+'px',fontSize:18+"px"}}/> <br/>
        </div>
        </Fragment>
  )
}