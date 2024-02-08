import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const blogs = [
    {
        id: 1,
        name: "Como convertirte en profesional de TI",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Qui quaerat inventore sed quo, non exercitationem numquam, illum soluta provident sint alias, 
        incidunt natus quisquam sit mollitia officia iusto! Exercitationem, debitis.`
    },
    {
        id: 2,
        name: "Como hacer una bandeja paisa",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Qui quaerat inventore sed quo, non exercitationem numquam, illum soluta provident sint alias, 
        incidunt natus quisquam sit mollitia officia iusto! Exercitationem, debitis.`
    }
]

const Blog = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { idblog } = useParams()

    useEffect(() => {
        const blog = blogs.filter((data) => idblog == data.id)

        setTitle(blog[0].name)
        setDescription(blog[0].description)
    }, [])

    return (
        <>
            <h2>{title}.</h2>
            <p>{description}.</p>
        </>
    )
}

export default Blog