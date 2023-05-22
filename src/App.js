import { Route, Routes } from "react-router";
import { Landing } from "./pages/landing/landing";
import { Users } from "./pages/user/user";
import { Login } from "./pages/login/login";
import { DetailUser } from "./pages/detail_user/detail_user";
import axios from "axios";
import { useEffect,useState } from "react";
import { CreateUser } from "./pages/create_user/createuser";


function App() {



const [data, setData] = useState([])
  useEffect(() => {
    const get_data = async () => {
      const rensponse = await axios.get('https://gorest.co.in/public/v2/users')

      setData(rensponse.data)
    }

    get_data()
  }, []);
  
  return (
    <div className="App">

      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'user'} element={<Users data={data} setData={setData}/>} />
        <Route path={'create_user'} element={<CreateUser data={data} setData={setData}/>}/>
        <Route path={'login'} element={<Login />} />
        <Route path={'detail_user/:id'} element={<DetailUser data={data} setData={setData}/>} />
      



      </Routes>
    </div>
  );
}

export default App;
