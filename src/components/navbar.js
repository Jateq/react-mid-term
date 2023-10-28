import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <>
        <nav>

                <div className="logo">
                    <Link to='/'>Twitter</Link>
                </div>
                <div className="links">
                    <Link to="/profile">Profile</Link>


                </div>

        </nav>
        </>
    )
}