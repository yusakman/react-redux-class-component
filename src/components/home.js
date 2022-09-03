import { Link } from "react-router-dom";
import React, {Component, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getData } from "../redux/action/dataAction";

// FUNCTION COMPONENT
const Home = () => {
    const { dataUser } = useSelector(state => state)
    const dispatch = useDispatch();

    console.log("datauser", dataUser)

    useEffect(() => {
        dispatch(getData())
    }, [])

    // console.log("Data", data)
    
    return ( <div>
        <h1>Home</h1>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>

        
        {/* <h1>{data.dataUser.data}</h1> */}
    </div> );
}
 
export default Home;


// CLASS COMPONENT

// class Home extends Component {
    
//   render() {
//     return (
//       <div>
//         <h1>Hai</h1>
//       </div>
//     );
//   }
// }

// export default Home;
