import { useSelector, } from "react-redux"
import { useNavigate } from "react-router";

const Login = () => {
  const userName = useSelector(state=>state.setup.userName) ?? 'unknown';
  console.log(userName);
  const navigate = useNavigate();

  
  return (
    <div>
      <div>
        <form action="">
          <input type="text" placeholder="Username"/>
          <input type="password" placeholder="Password"/>

          <button type="submit">Login</button>
        </form>
      </div>
      <div>
        <p onClick={()=>{
          navigate('/register')
        }}>New User? Register</p>
      </div>
    </div>
  )
}

export default Login