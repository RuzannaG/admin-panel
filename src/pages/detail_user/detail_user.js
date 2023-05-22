import { useParams } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";

export const DetailUser=({data,setData})=>{
    const [show,setShow]=useState(null)
const [comments, setCom]=useState();
const navigate = useNavigate();
    const params=useParams();
    const hadleCom= (e)=>{
        setCom(e.target.value)
  
     }
const hadleAdd=()=>{
  
        setData([...data,{
         id:Math.random(),
comments:''
          
        }])
        setShow(null)
    }

    
    const detailUser=data?.find((i) => i.id=== +params.id)

    const goBack = () => {
		navigate(-1);
    }
    return(

        
        <div className="detail"> 
        <button onClick={goBack}>Go back</button>
             {  <li  className="table">
              <li className="id">{detailUser?.id}</li>
              <li className="col-2">{detailUser?.name}</li>
              <li className="col-3">{detailUser?.email}</li>
              <li className="col-4">{detailUser?.gender}</li>
              <li className="col-5">{detailUser?.status}</li>
              <li>      <p>{comments}</p></li>
         <button onClick={setShow}> Add Comments</button>
            </li>
            
}
{
        show &&
        <div className="modal"> 
        <div className="modal-flex">
            <input type="text" onChange={hadleCom} placeholder="Add comments"/>
            <button onClick={hadleAdd}>add</button>
            <button onClick={()=>setShow(null)}>Close</button>
        </div>
        </div>
}
          
        </div>
    )
}