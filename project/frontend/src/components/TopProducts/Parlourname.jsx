// import axios from "axios";
// import {useState , useEffect} from 'react'

const Parlourname = () => {
    const [parlourlist, setparlourlist] = useState([]);
 
    let getParlours = () => {
      axios.get("http://localhost:7000/api/parlour/getallparlours")
      .then((res)=>res.data)
      .then((finalres)=> {
      console.log(finalres)
      setparlourlist(finalres)
        
      })
  }
   useEffect(()=> {
     getParlours();
      
    },[])
  return (
    <ul>
            {data.map((item) => (
                <li key={item.id}>{item.parlourname}</li>
            ))}
        </ul>
  )
}

export default Parlourname