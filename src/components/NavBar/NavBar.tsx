import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/test'>Page 1</Link>
                </li>
                <li>Page 2</li>
            </ul>
        </nav>
    )
}

export default NavBar