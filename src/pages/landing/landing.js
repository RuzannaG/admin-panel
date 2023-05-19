import { Link } from "react-router-dom"

export const Landing = () => {
    return (

        <div className="landing">
            <div className="wel">
                <h2>Welcome ,<br/> have a good working day </h2>
                <Link to={'./login'}>
                 <button>Login Page</button>
                 </Link>
               
            </div>
            <div>
                <img src="https://www.lynxpro.com/blog/wp-content/uploads/sites/2/2019/08/service-desk.png" />
            </div>

        </div>

    )
}
