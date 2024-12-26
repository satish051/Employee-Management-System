import { useEffect,userState, useState } from "react";
export default function DisplayAdmin(){
    const[admins,setAdmins] = useState([]);

    useEffect(()=>{
        fetch('/api/admins')
        .then((response) => response.json())
        .then((data) => setAdmins(data))
        .catch((error) => console.error("Error fetching list:",error));  
    },[]);

    return(
        <div>
            <h1>
                <ul>
                    {admins.map((admin) =>(
                        <li key={admin.id}>
                            {admin.id} - {admin.full_name}
                        </li>
                    ))}
                </ul>
            </h1>
        </div>
    );
};