import React, { useState, useEffect } from "react";
import { STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR } from "./styleTable";

function Table() {
  const [condominiums, setCondominiums] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5000/api/condominiums");
    const data = await response.json();
    setCondominiums(data);
  };
  
  const keys= ["name", "direccion", "phone", "email", "ruc"];
  

  return (
    <>
      <STable>
        <STHead>
          <STHeadTR>
            {["#", ...keys].map((item, index) => (
              <STH key={index}>
                {item}
              </STH>
            ))}
          </STHeadTR>
        </STHead>
        <STBody>
          {condominiums.map((obj, index) => (
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
            </STBodyTR>
          ))}
        </STBody>
      </STable>
    </>
  );
}

export default Table;
