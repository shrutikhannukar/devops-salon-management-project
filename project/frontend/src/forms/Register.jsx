import './Register.css'
import axios from 'axios'
import { useState } from 'react'


export const Register = () => {
  
  const [parlourname, setParlourname] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [weblink, setWeblink] = useState("");
  // const [menu, setMenu] = useState("");
  // const [otime, setOtime] = useState("");
  // const [ctime, setCtime] = useState("");
  // const [highlights, setHighlights] = useState("");
  const [images, setImages] = useState("");
 


  let  handleRegister=async(e, parlourname, number , city, state,  pincode, country, address, fname, lname, email,password,weblink,images)=>{
    e.preventDefault( );
    
    alert(parlourname+"=="+ number+"=="+city+"=="+ state+"=="+ pincode+"=="+ country+"=="+ address+"=="+fname+"=="+lname+"=="+email+"=="+password+"=="+weblink+"=="+images);
    
    axios
      .post('/api/parlour/register',{parlourname, number , city, state,  pincode, country, address, fname, lname, email,password,weblink,images})
      .then(() => console.log(' Created'))
      .catch(err => {
        console.error(err);
      });
    }
  return (
    <div className='register_container'>
    <div className="ml-4 mr-4">
    <form className="space-y-6 " method="POST" onSubmit={(e)=> {handleRegister(e ,parlourname, number , city, state,  pincode, country, address, fname, lname, email,password,weblink,images)} }>


          {/* owner details */}



<div className="grid grid-cols-2 box">
<h1 className=' text-white text-2xl col-span-full'><b>Owner Details</b></h1>
{/* col-span-2 */}
<div className='mt-4 mr-5'>
<input type="text" id="owner_first_name" name="owner_first_name" 
placeholder='First Name' onChange={(e) => setFname(e.target.value)}
 value={fname} required className="block w-full rounded-md border-0 p-2.5
  text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black 
  focus:ring-2 focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6"/>
</div>

<div className='mt-4 ml-5'>
<input type="text" id="owner_last_name" name="owner_last_name"
 placeholder='Last Name' onChange={(e) => setLname(e.target.value)}
  value={lname} required className="block w-full rounded-md border-0 p-2.5
   text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black 
   focus:ring-2 focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6"/>
</div>

<div className='mt-4 mr-5'>
<input type="email" id="email" name="email" placeholder='Email'
 onChange={(e) => setEmail(e.target.value)} value={email} required
  className="block w-full rounded-md border-0 p-2.5 text-black shadow-sm
   ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 
   focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6"/>
</div>

<div className='mt-4 ml-5'>
<input type="password" id="password" name="password" placeholder='Password'
 onChange={(e) => setPassword(e.target.value)} value={password} required 
 className="block w-full rounded-md border-0 p-2.5 text-black shadow-sm ring-1
  ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset
   focus:ring-indigo-600 xl:text-xl sm:leading-6"/>
</div>
</div>
      {/* parlour details */}
         
     
        <div className="grid grid-cols-2 box">
        {/* <div> */}
        <h1 className='pt-2 text-white text-2xl col-span-full'><b>Parlour Details</b></h1>
        {/* col-span-2 */}
        <div className='mt-4 mr-5'>
        <input type="text" id="parlour_name" name="parlour_name" 
         placeholder='Parlour Name' onChange={(e) => setParlourname(e.target.value)}
          value={parlourname} required className="block w-full rounded-md border-0 p-2.5
           text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black 
           focus:ring-2 focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6 "/>
        </div>

        <div className='mt-4 ml-5'>
        <input type="text" id="contact_number" name="contact_number" placeholder='Contact Number'
         onChange={(e) => setNumber(e.target.value)} value={number} required 
         className="block w-full rounded-md border-0 p-2.5 text-black shadow-sm ring-1 ring-inset
          ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 
          xl:text-xl sm:leading-6"/>
        </div>
        
        <div className='mt-4 mr-5'>
        <select type="text" name="city" placeholder="City" 
        onChange={(e) => setCity(e.target.value)} value={city} required 
        className="block w-full rounded-md border-0 pl-1.5 pt-2.5 pb-2.5
         text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black
          focus:ring-2 focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6">
       
                  <option>city</option>
                  <option>Belgaum</option>
                  <option>pune</option>
                  <option>Department</option>
                </select>
                </div>

                <div className='mt-4 ml-5'>
      <input type="text" id="state" name="state" placeholder='State' 
      onChange={(e) => setState(e.target.value)} value={state} required 
      className="block w-full rounded-md border-0 p-2.5 text-black shadow-sm 
      ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2
       focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6"/>
      </div>
      
      <div className='mt-4 mr-5'>
      <input type="text" id="pincode" name="pincode" placeholder='Pincode'
       onChange={(e) => setPincode(e.target.value)} value={pincode} required 
       className="block w-full rounded-md border-0 p-2.5 text-black shadow-sm 
       ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 
       focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6"/>
      </div>
      
       <div className='mt-4 ml-5'>
       <input type="text" id="country" name="country" placeholder='Country' 
       onChange={(e) => setCountry(e.target.value)} value={country} required
        className="block w-full rounded-md border-0 p-2.5 text-black shadow-sm 
        ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 
        focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6"/>      
       </div>
       
       <div className='mt-4 col-span-full'>
        {/* col-span-3 */}
       <input type="text" name="parlour_address" rows="3" cols="50"
        placeholder='Address' onChange={(e) => setAddress(e.target.value)} 
        value={address} required className="block w-full rounded-md border-0 p-2.5 
         text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black 
         focus:ring-2 focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6"/>
       </div>

<div className='mt-4 col-span-full'>
        {/* col-span-3 */}
       <input type="text" name="images" rows="3" cols="50" 
       placeholder='Parlour Image Url' onChange={(e) => setImages(e.target.value)}
        value={images} required className="block w-full rounded-md border-0 p-2.5 
         text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2
          focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6"/>
       </div>
       

       <div className='mt-4 col-span-full'>
        {/* col-span-3 */}
       <input type="text" name="weblink" rows="3" cols="50" 
       placeholder='Website Link' onChange={(e) => setWeblink(e.target.value)}
        value={weblink} required className="block w-full rounded-md border-0 p-2.5 
         text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2
          focus:ring-inset focus:ring-indigo-600 xl:text-xl sm:leading-6"/>
       </div>
       
       </div>
       <div>
                <button
                  type="submit"
                  className="flex w-full  justify-center rounded-md bg-indigo-600
                   px-3 p-2.5  xl:text-2xl font-semibold leading-6 text-white shadow-sm
                    hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                    focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>




{/* Parlour Details Menu */}



{/* <div>
<h1 className=' text-white'><b>Parlour Details Menu</b></h1>

<div className='mt-4'>
<input type="text" name="menu"  rows="3"  placeholder='Menu' onChange={(e) => setMenu(e.target.value)} value={menu} required className="block w-full rounded-md border-0 p-1.5  text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
</div>

</div>


<div className='box grid '>
<h2 className=' text-white col-span-2'><b>Timing</b></h2><br/>

<div className='mt-4'>
<input type="text" name="timing" placeholder='Open Timing' onChange={(e) => setOtime(e.target.value)} value={otime} required className=" rounded-md border-0 p-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
</div>

<div className='mt-4'>
<input type="text"  name="timing" placeholder='Close Timing' onChange={(e) => setCtime(e.target.value)} value={ctime} required className=" rounded-md border-0 p-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
</div>
</div>

<h2 className='text-white'><b>Highlights</b></h2>

<div className='mt-4'>
<input type="text"  name="highlights" rows="4" cols="50"  placeholder='Highlights' onChange={(e) => setHighlights(e.target.value)} value={highlights} required className="block w-full rounded-md border-0 p-1.5  text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
</div>




<b><h2 className='text-white'>Upload Images</h2></b>

<div className='mt-4'>
        <label htmlFor="images" >Select images:
        <input type="file"  name="images" accept="image/*" multiple onChange={(e) => setImages(e.target.value)} value={images} required className="block w-full rounded-md border-0 p-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/></label><br/>
        </div>

        <div>
        <button type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">submit</button>
        </div>
      
 */}




</form>
    </div>
    </div>
  )
}