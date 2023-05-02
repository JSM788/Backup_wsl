import { useOutletContext } from "react-router-dom";
import StatisticsGraph from '../components/StatisticsGraph';

const HCHODateEstadistica = () => {
  
  const [ data ] = useOutletContext()

  return (
    <>      
        <StatisticsGraph
          //Grafico
          name="HCHO"
          items={data.results}
        />
      
    </>
  )
}

export default HCHODateEstadistica