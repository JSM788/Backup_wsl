import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import { Loading } from "../components/Loading";
import { NoData } from "../components/NoData";
import { clienteAxiosValhalla } from "../config/axios";
import { AuthContext } from "../context/auth/AuthProvider";
import { FiltrosContext } from "../context/Filtros/FiltrosProvider";
import { CardContainer } from "../styles/SalasStyle";

import {
  PaginacionContainer,
  CantidadResultados,
  PaginacionBox,
} from "../styles/TablasStyle";
import CardLista from "../components/CardLista";
import useFilters from "../hooks/useFilters";

export const TablaListadoSalas = ({sede, estado}) => {

  const { usuario } = useContext(AuthContext);
  const { searchSalas, FiltrarSalaReset } = useContext(FiltrosContext);
  const { getSalasFiltered } = useFilters()

  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [counts, setCounts] = useState(null);


  useEffect(() => {
    FiltrarSalaReset();
  }, []);

  useEffect(() => {
    getData(1);
  }, [searchSalas, sede, estado]);

  const getData = async (page) => {  
    const res = await getSalasFiltered(usuario.enterprise, searchSalas, sede, estado, page);
    setItems(res.results);
    setLoaded(true);
    setCounts(res.count);
  };
  
  const handlePageClick = async (data) => {
    setLoaded(false);
    let pagina = data.selected + 1;
    const DatosPaginados = await getData(pagina);
    setItems(DatosPaginados);
    setLoaded(true);
  };

  console.log(items)

  const totalDePaginas = Math.ceil(counts / 10);

  return (
    <>
      {loaded ? (
        <>
          {counts === 0 ? (
            <NoData key="nodata" />
          ) : (
            <CardContainer>
              <AnimatePresence>
                {items.map((item) => <CardLista key={item.id} item={item} />)}
              </AnimatePresence>
            </CardContainer>
          )}
        </>
      ) : (
        <Loading />
      )}
      <PaginacionContainer>
        <CantidadResultados>
          {counts === 0 ? (
            <h3>"----"</h3>
          ) : (
            <h3>
              Mostrando {items.length - 1} de {counts - 1} resultados
            </h3>
          )}
        </CantidadResultados>
        <PaginacionBox>
          <ReactPaginate
            previousLabel={<i className="fas fa-angle-left"></i>}
            nextLabel={<i className="fas fa-angle-right"></i>}
            breakLabel={"..."}
            pageCount={totalDePaginas}
            marginPagesDisplayed={3}
            // pageRangeDisplayed={6}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousClassName={"anterior"}
            nextClassName={"siguiente"}
            activeLinkClassName={"activePaginacionFondo"}
            activeClassName={"activePaginacionFondo"}
          />
        </PaginacionBox>
      </PaginacionContainer>
    </>
  );
};
