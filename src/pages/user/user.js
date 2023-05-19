import { useNavigate } from "react-router";
import { CreateUser } from "./createuser";


export const Users=({data, setData})=>{
    const navigate=useNavigate();
    const handleDetail=(id)=>{
        navigate(`/detail_user/${id}`)
    }
    return(
      <div className="head">
      
           <CreateUser data={data} setData={setData} />
        <div className="header"> 
     
      <ul className="responsive-table">
    <li className="table-header">
      <div className="col col-1"> Id</div>
      <div className="col col-2"> user NAME</div>
      <div className="col col-3">EMAIL</div>
      <div className="col col-4">GENDER</div>
      <div className="col col-5">STATUS</div>

    </li>
        {data.map((i, key) => {
          return (
            <li key={key} className="table-row" onClick={()=>{handleDetail(i.id)}}>
              <li className="col-1">{i?.id}</li>
              <li className="col-2">{i?.name}</li>
              <li className="col-3">{i?.email}</li>
              <li className="col-4">{i?.gender}</li>
              <li className="col-5">{i?.status}</li>
            </li>
          )
        })}
      </ul>
    </div></div>
  );
}