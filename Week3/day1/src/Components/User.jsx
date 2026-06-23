import { useState } from "react";

export default function User(){
    const [user,setUser]=useState([]);
    const url = 'https://jsonplaceholder.typicode.com/users';

    const getData = ()=>{
        return fetch(url).then((res)=>res.json());
    };

    const fetchAndGetUser = async()=>{
        try{
            const data = await getData();
            setUser(data);

            console.log(user);
        }catch(error){
            console.log(error);

        }
    }
    return(
    <div>
        <h1>Welcome to my Page</h1>
        <button onClick={fetchAndGetUser}>FetchAndGetUser</button>
        <hr />

        {user.map((el)=>(
            <div
                style={{border:'1px solid red',padding:'20px',margin:'20px'}}>;
                <h1>Name:{el.name}</h1>
                <h1>Email:{el.email}</h1>
                <h1>id:{el.id}</h1>
                <h1>Website:{el.website}</h1>
                <button>More Info</button>
            </div>    

        ))}
    </div>
);
};


