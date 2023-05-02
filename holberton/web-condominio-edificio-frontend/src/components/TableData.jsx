import React, { useState } from "react";


function TableData() {
  const [condominiums, setCondominiums] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5000/api/condominiums");
    const data = await response.json();
    setCondominiums(data);
  };

  return (
    <>
      <Table data={condominiums} />
    </>
  );
}

export default TableData;
