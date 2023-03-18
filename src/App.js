import { useState } from 'react'
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import StrenghtBar from './Components/StrenghtBar'

import './App.css';


function App() {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [password, setpassword] = useState('');




  const handleToggle = () => {

    if (type === 'password') {
      setIcon(eye);
      setType('text');
    }
    else {
      setIcon(eyeOff);
      setType('password');
    }
  }

  return (

    <div className="main">
      <div className="password_container">
        <input type={type} className="password" id="password" spellCheck="false" onChange={e => setpassword(e.target.value)} />
        <span onClick={handleToggle}><Icon icon={icon} size={25} color='white' /></span>
      </div>
       < StrenghtBar password={password}/>
    </div>

  );
}

export default App;
