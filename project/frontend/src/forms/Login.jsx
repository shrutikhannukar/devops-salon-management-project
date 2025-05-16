import axios from 'axios';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Login.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleLogin = (e) => {
      console.log(email);
      console.log(password);
      e.preventDefault();

      axios.post('/api/auth/login', {
          email: email,
          password: password
      })
      .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user) );

          if(res.data.user.role=="Admin"){
            window.location.replace("/admin");
            }
          if(res.data.user.role=="User"){
            window.location.replace("/beauty_icon");
          }
          if(res.data.user.role=="Parlour owner"){
            window.location.replace();
          }
      })
      .catch(err => {
          console.log(err);
          alert('incorrect email or password');
      })

  }

    return (
      <>
      
        
        
          <div  className="Login_container1 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto pt-4"
              src="https://th.bing.com/th?id=OIP.7Fp8Wmr4Pfy9xp5jh5S_ngHaIa&w=234&h=266&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              alt="Your Company"
            />
            <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Log in to your account
            </h2>
          </div>
  
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={(e)=> {handleLogin(e ,email,password)}} className="space-y-6" action="http://localhost:5173/page" method="POST">
              <div>
                
                <div className="mt-2">
                  <input
                  
                    
                    name="email"
                    type="email"
                    placeholder='Email'
                    autoComplete="email"
                    required
                    className=" w-full rounded-md border-0 p-2.5 text-black shadow-sm ring-1 
                    ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset
                     focus:ring-indigo-600 xl:text-xl sm:leading-6"
                    onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                 
                  <div className="text-xl">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder='Password'
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 p-2.5 text-black 
                    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black 
                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6"
                    onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
              </div>

              <div>
              
                <button 
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 
                  py-2 xl:text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                   focus-visible:outline-indigo-600"
>
              <div className="font-semibold leading-6">
              Log in
              </div>
                </button>
                
              </div>
            </form>
  
            <p className="mt-10 text-center text-xl text-white">
              Do not have an account?{' '}
              <NavLink to="/sign_up" className="font-semibold leading-6 text-indigo-600
               hover:text-indigo-500">
          Create account</NavLink>
              
            </p>
          </div>
        </div>
      
        
      </>
    )
  }
  export default Login