import { useEffect } from 'react';
import { useSelector, } from 'react-redux'
import { useNavigate } from 'react-router';

const Welcome = () => {
  const userName = useSelector(state => state.setup.userName) ?? null;
  const navigate = useNavigate();

  useEffect(()=>{
    if(!userName){
      navigate('/login');
    }else{
      navigate('/home');
    }
  }, [userName]);

  return (
    <div>Welcome</div>
  )
}

export default Welcome