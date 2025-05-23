import { Link } from "react-router-dom"

// Types
import type { Dispatch, SetStateAction } from "react"
import type { User } from "../../App"

type NavBarProps = {
    user: User | null
    setUser: Dispatch<SetStateAction<User | null>>
}

// Component
const NavBar = ({ user, setUser }: NavBarProps) => {

    // Function to log the user out
    const handleSignOut = () => setUser(null)

    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/test'>Page 1</Link></li>
                <li>Page 2</li>
                <li>Page 3</li>
                { user 
                    ? <li><Link to='/' onClick={handleSignOut}>Sign Out</Link></li>
                    : <>
                        <li><Link to='/signin'>Sign In</Link></li>
                        <li><Link to='/signup'>Sign Up</Link></li>
                    </>
                }
            </ul>
        </nav>
    )
}

export default NavBar