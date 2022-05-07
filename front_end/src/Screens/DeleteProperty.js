import React,{useEffect} from 'react'
import { useParams } from "react-router-dom";

import axios from 'axios';

import { useNavigate } from "react-router-dom";

export default function DeleteProperty() {
    // /delete/61d27e0f6157d81b0caef223 
   //  path='/delete/:userid'  
    let params = useParams();
    // console.log(params);
    //{userid:61d27e0f6157d81b0caef223}

    let navigate = useNavigate();


    var urlData = params.propid;
    // console.log(urlData);

    useEffect(()=>{
        // console.log("USE EFFECT");
        // console.log(urlData);
        //http://iitdac.met.edu:8001/ModernWebApp/api/products/
        // axios.delete("http://localhost:4000/api/users/"+urlData)
        // .then((res)=>{
        //     // console.log("res After Delete");
        //     // console.log(res);
        //     navigate('/allusers');
        // })

        axios.delete("http://localhost:7070/admin/delete/"+urlData)
        .then((res)=>{
            // console.log("res After Delete");
            // console.log(res);
            navigate('/viewproperty');
        })
    } , []);

    return (
        <div>
            DELETE COMP
        </div>
    )

}

//export default DeleteProperty;

