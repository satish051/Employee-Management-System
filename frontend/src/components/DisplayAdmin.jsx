import { useEffect, useState } from "react";
import Admin from "./Admin";
export default function DisplayAdmin(){
    const[admins,setAdmins] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5173/api/admins',{
            method:"GET",
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => setAdmins(data))
        .catch((error) => console.error("Error fetching list:",error));  
    },[]);

    return(
        <div>
                <div>
                    {admins.map((admin) =>(
                        // <li key={admin.id}>
                        //     {admin.id} - {admin.full_name}
                        // </li>
                        <Admin key={admin.id} id={admin.id} name={admin.full_name}  email ={ admin.email}/>
                    ))}
                </div>
        </div>
    );
};