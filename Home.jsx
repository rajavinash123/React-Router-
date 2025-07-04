import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const nevigate=useNavigate();
    function ClickHandler(){
        nevigate('/Dashboard');
    }

  return (
    <div>
      Home page
      <button onClick={ClickHandler}>Move to Dashboard</button>
    </div>
  )
}

export default Home;



