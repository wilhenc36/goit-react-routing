import { Link } from "react-router-dom"

const Blogs = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/blogs/1" >Como convertirte en profesional de TI</Link>
                </li>
                <li>
                    <Link to="/blogs/2">Como hacer una bandeja paisa</Link>
                </li>
            </ul>
        </>
    )
}

export default Blogs