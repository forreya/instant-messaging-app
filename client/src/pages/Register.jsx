import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    await axios.post('/register', {username,password});
  }

  return ( 
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={handleRegister}>
        <input value={username} 
               onChange={event => setUsername(event.target.value)} 
               type="text" 
               placeholder="username" 
               className="block w-full rounded-sm p-2 mb-2 border"
        />
        <input value={password} 
               onChange={event => setPassword(event.target.value)} 
               type="password" 
               placeholder="password" 
               className="block w-full rounded-sm p-2 mb-2 border"
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">Register</button>
      </form>
    </div>
  )
}

export default Register;