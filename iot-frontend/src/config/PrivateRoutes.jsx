import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = (token) =>{
    return(
        token.auth ? <Outlet/> : <Navigate to={'/'}/>
    )
}

export default PrivateRoutes