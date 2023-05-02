import { Link } from "react-router-dom"

const ErrorPage = () => {

    console.log('pag')

    return(
        <>
            <p>Esta página no existe</p>
            <Link to="/sistema">Regresar</Link>
        </>
    )
}

export default ErrorPage