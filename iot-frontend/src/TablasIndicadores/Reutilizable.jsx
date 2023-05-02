import ReactPaginate from "react-paginate";
import { Loading } from "../components/Loading";
import { NoData } from "../components/NoData";
import {
  CantidadResultados,
  PaginacionBox,
  PaginacionContainer,
  TablasDetalles,
  TableStyle,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "../styles/TablasStyle";
import { AnimationDetallesTablas } from "../animation/Animacion";
import { AnimatePresence } from "framer-motion";
import EmojiVerde from "../assets/svg/emojiVerde.svg";
import EmojiAmarillo from '../assets/svg/emojiAmarillo.svg';
import EmojiRojo from '../assets/svg/emojiRojo.svg';
import { pirReturner } from '../utils/pirLogic';
import { tableReturner } from "../utils/tableLogic";

const Reutilizable = ({
  campoTablaCo2 = "",
  simboloCo2 = "",
  subValor = null,
  estado = null,
  items,
  page,
  loading,
  totalDePaginas,
  counts,
  handlePageClick,
}) => {

  const { safe, contaminated, dangerous } = tableReturner(campoTablaCo2)

  return (
    <AnimationDetallesTablas>
      <TablasDetalles>
        <br />
        <br />
        {!loading ? (
          <>
            <AnimatePresence>
              <TableStyle>
                <Thead>
                  <Tr>
                    <Th>Fecha</Th>
                    <Th>Hora</Th>
                    {estado && (
                      <Th>
                        {campoTablaCo2}
                        {subValor ? <sub>{subValor}</sub> : null} {simboloCo2 && <>({simboloCo2})</>}
                      </Th>
                    )}
                    <Th>Estado</Th>
                  </Tr>
                </Thead>

                {items.map((item) => {
                  return (
                    <Tbody
                      key={item.created_at}
                      layout
                      animate={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Tr actualizar="actualizar">
                        <Td> {item.created_at.substr(0, 10)} </Td>
                        <Td> {item.hours.toLowerCase()} </Td>
                        { campoTablaCo2 !== 'PIR' ? (
                          <>
                            <Td>
                              {item.value_indicator} {simboloCo2}
                            </Td>
                            <Td>
                              {item.status === 'HIGH' && (<span><img src={EmojiRojo} height={'30px'}/>{dangerous}</span>)}
                              {item.status === 'NORMAL' && (<span><img src={EmojiAmarillo} height={'30px'}/>{contaminated}</span>)}
                              {item.status === 'LOW' && (<span><img src={EmojiVerde} height={'30px'}/>{safe}</span>)}
                            </Td>
                        </>):(
                          <Td>
                            {pirReturner(item.value_indicator)}
                          </Td>         
                        )
                      }
                      </Tr>
                    </Tbody>
                  );
                })}
              </TableStyle>
              {counts === 0 ? <NoData key="nodata" /> : null}
            </AnimatePresence>
          </>
        ) : (
          <Loading />
        )}
        <PaginacionContainer detalles="tabla">
          <CantidadResultados>
            {counts === 0 ? (
              <h3>"----"</h3>
            ) : (
              <h3>
                Mostrando {items.length} de {counts} resultados{" "}
              </h3>
            )}
          </CantidadResultados>
          <PaginacionBox>
            <ReactPaginate
              previousLabel={<i className="fas fa-angle-left"></i>}
              nextLabel={<i className="fas fa-angle-right"></i>}
              breakLabel={"..."}
              pageCount={totalDePaginas}
              marginPagesDisplayed={2}
              // pageRangeDisplayed={6}
              forcePage={page}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousClassName={"anterior"}
              nextClassName={"siguiente"}
              activeLinkClassName={"activePaginacionFondo"}
              activeClassName={"activePaginacionFondo"}
            />
          </PaginacionBox>
        </PaginacionContainer>
      </TablasDetalles>
    </AnimationDetallesTablas>
  );
};

export default Reutilizable;
