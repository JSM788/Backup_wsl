import React, { useState, useEffect} from "react";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR, Container, SubContainer, Title } from "../styles.js"
import Navigation from "../../Navigation/Navigation.jsx";
import { BsPencilSquare, BsTrashFill } from "react-icons/bs";

const keys= ["Nombre", "Concepto", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Total"];

function Egresos(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;
  
  useEffect(() => {
    console.log("Paso 6")
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
    console.log("Paso 9")
  }, [itemOffset, itemsPerPage, data]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  
  console.log(data)
  return (
    <Container>
      <SubContainer>
      <Title>Gastos</Title>
      <STable>
        <STHead>
          <STHeadTR>
            {["#", ...keys].map((item, index) => (
              <STH key={index}>
                {item}
              </STH>
            ))}
            <STH>
              {"Acciones"}
            </STH>
          </STHeadTR>
        </STHead>
        <STBody>
          {currentItems.map((obj, index) => (
            <STBodyTR key={index}>
              <STD>
                {index + 1}
              </STD>
              {keys.map((item, index) => {
                const value = obj[item];
                return (
                <STD key={index}>
                  {value}
                </STD>
                );
              })}
              <STD>          
                <BsPencilSquare style={{ color: "#416AF9",fontSize: "25px", marginRight: "10px" }} />
                <BsTrashFill style={{ color: "#ff0000", fontSize: "25px", cursor: "pointer"}}/> 
              </STD>
            </STBodyTR>
          ))}
        </STBody>
      </STable>
      <Navigation
        pageClick={handlePageClick}
        contador={pageCount}
       />
      </SubContainer>
    </Container>
  );
}

export default Egresos;