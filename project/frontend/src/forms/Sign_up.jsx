import axios from 'axios'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sign_up.css'
const Sign_up = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  
  let  handleSign_up=async(e, name,email,role, password)=>{
      e.preventDefault();
      alert(name+"== "+email+" =="+role+"=="+password);

      axios
      .post('/api/auth/signup', {name, email,role, password})
      .then(() => console.log(' Created'))
      .catch(err => {
        console.error(err);
      });
    }
    return (
      <>
        
        
        {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8 "> */}
          <div  className="Sign_up_container ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://th.bing.com/th?id=OIP.7Fp8Wmr4Pfy9xp5jh5S_ngHaIa&w=234&h=266&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt="Your Company"
            />
            <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Create your account
            </h2>
          </div>

          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={(e)=> {handleSign_up(e ,name,email,role,password)}} 
            className="space-y-6" action="#" method="POST">

            <div>
                
                <div className="mt-2">
                  <input
                  
                   
                    name="name"
                    type="text"
                    placeholder='Full Name'
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 p-2.5  text-black 
                    shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-black 
                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6"
                    onChange={(e) => setName(e.target.value)} value={name}/>
                </div>
                </div>

              <div>
                <div className="mt-2">
                  <input
                  
                    
                    name="email"
                    type="email"
                    placeholder='Email'
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 p-2.5  text-black 
                    shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-black 
                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6"
                    onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
              </div>
              <div className='mt-2'>
        <select type="select" name="role" placeholder="Role"
         onChange={(e) => setRole(e.target.value)} value={role} required 
         className="block w-full rounded-md border-0 pl-1.5 
          text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black 
          focus:ring-2 focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6">
                  <option>Role</option>
                  <option>Admin</option>
                  <option>Parlour owner</option>
                  <option>User</option>
                </select>
                </div>
  
              <div>
                <div className="flex items-center justify-between">
                 
                </div>
                <div className="mt-2">
                  <input
                  
                    name="password"
                    type="password"
                    placeholder='Password'
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 p-2.5  text-black 
                    shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-black 
                    blackfocus:ring-2 focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6"
                    onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
              </div>
              
  
              <div>
              
                <button
                  type="submit"
                  className="flex w-full  justify-center rounded-md bg-indigo-600
                   px-3 py-1.5  xl:text-xl font-semibold leading-6 text-white shadow-sm
                    hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create account
                </button>
              </div>
              
            </form>
  
            <p className="mt-5 text-center text-xl text-white">
              Already have an account?{' '}
              <NavLink to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Log in</NavLink>
             
            </p>
          </div>
        </div>
        {/* </div> */}
        
      </>
    )
  }
  export default Sign_up