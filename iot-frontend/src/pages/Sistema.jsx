import React, { useContext, useEffect, useState } from 'react'
import { MdExitToApp } from 'react-icons/md'
import { Outlet, Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { Header } from '../components/Header'
import HeaderFilter from '../components/HeaderFilter'
import { Navegador } from '../components/Navegador'
import { clienteAxiosValhalla } from '../config/axios'
import { AuthContext } from '../context/auth/AuthProvider'

import {ContenedorSistema, BoxSistema, Sidebar, Paginas, ContenedorPages, Username, Initials, LogoutButton} from '../styles/SidebarStyle'

const AnimationPage = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 2
    }
  }
}

export const Sistema = ({logout}) => {
  
  const {
    usuarioAutenticado, 
    usuario, 
    cerrarSesion,
    setStartDate,
  } = useContext(AuthContext);

  const controller = new AbortController()

  const totalLogout = () =>{
    cerrarSesion()
    logout()
  }

  useEffect(() => {
    usuarioAutenticado()
    return ()=>{
      controller.abort()
    }
  }, []);

  useEffect(() => {
    setInfo()
  }, [usuario]);

  const setInfo = async () =>{
    if(usuario){
      const res = await clienteAxiosValhalla.get(`/enterprise/api/enterprise/detail`)
      console.log(res)
      setName(res.data.name)
      setAcro(res.data.acronym)
      setStartDate(res.data.date_installation)
      setFirstRoomId(res.data.first_room)
    }   
  }
  
  const [activar, setActivar] = useState(false);
  const [name, setName] = useState('')
  const [acro, setAcro] = useState('')
  const [firstRoomId, setFirstRoomId] = useState(null)

  return (
        <>
      {usuario ? (
          <ContenedorSistema
            variants={AnimationPage}
            initial="hidden"
            animate="show"
          >
            <BoxSistema>
              <Sidebar activar={activar}>
                <ul>
                  <li> <Link to=""><img className='logo' src={Logo} alt="logo" /></Link> </li>
                  <Username>{name}<Initials>{acro}</Initials></Username>
                  <LogoutButton onClick={()=>totalLogout()}><MdExitToApp size={20}/>Cerrar sesión</LogoutButton>
                  <Navegador
                    firstRoomId={firstRoomId}
                  />
                </ul>
              </Sidebar>
              <Paginas activar={activar} >
                  <Header Sidebar={()=>setActivar((prev)=>!prev)} logout={logout} />
                  <ContenedorPages>
                      <Outlet />
                  </ContenedorPages>
              </Paginas>
            </BoxSistema>
        </ContenedorSistema>
      ) : null}
    </>
    )
}
