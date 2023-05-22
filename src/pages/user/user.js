import { useNavigate } from "react-router";
import { Link } from "react-router-dom";



export const Users=({data, setData})=>{
    const navigate=useNavigate();
    const handleDetail=(id)=>{
        navigate(`/detail_user/${id}`)
    }
    return(

      <div className="content">
        
        <Link to={"/create_user"}><button>Create New Users</button>
        </Link>
      
      
           
      
     
      <ul className="team">
  
        {data.map((i, key) => {
          return (
            <li key={key} className="member co-funder" onClick={()=>{handleDetail(i.id)}}>
            	<div class="thumb"> <p>ID<br/>{i?.id} </p></div>
			<div class="description">
				<h3>{i?.name}</h3>
				<span className="span">EMAIL</span><span>{i?.email}</span><br/>
				<span className="span">GENDER</span><span> {i?.gender}</span><br/>
				<span className="span">STATUS</span><span> {i?.status}</span>
		
			</div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}