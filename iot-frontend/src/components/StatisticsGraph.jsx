import React, { useEffect, useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ReferenceLine,
    Label,
  } from "recharts";
import { graphReturner } from '../utils/graphLogic';
import CustomDot from './CustomDot';
import StatisticsLabel from './StatisticsLabel';

const StatisticsGraph = ({
  items=[],
  name="",
  short=false,
  isDate=false
}) => {
  
  const [graphData, setGraphData] = useState(items)

  useEffect(() => {
    setGraphData(items) 
  }, [items]) // [data] keeps the chart data changing just once after the diff


  const { minData, maxData, contaminatedLine, dangerLine, safeLine } = graphReturner(name)

  const domain = [minData, maxData];

  const height = short ? 400 : 600

  const bottom = short ? 0 : 14

  const dataKey = isDate ? 'created_at' : 'hours'

  return (
    <>
      {items && (
          <ResponsiveContainer height={height} width="99.5%">
            <LineChart
              data={graphData}
              margin={{
                top: 20,
                right: 10,
                left: 0,
                bottom: bottom,
              }}
            >   
              <XAxis dataKey={dataKey} interval={'preserveEnd'}/>
              <YAxis domain={domain}/>
              <CartesianGrid strokeDasharray="5 5" />
              <Tooltip />
              <Legend />
              <ReferenceLine 
                y={dangerLine}
                strokeDasharray="8 8"
                stroke="red"
              >
                <Label content={<StatisticsLabel fill={'red'} value={dangerLine}/>}/>
              </ReferenceLine>
              <ReferenceLine 
                y={contaminatedLine}
                strokeDasharray="8 8"
                stroke="#FEBC2D"
              >
                <Label content={<StatisticsLabel fill={'#FEBC2D'} value={contaminatedLine}/>}/>
              </ReferenceLine>
              {safeLine && 
                <ReferenceLine 
                  y={safeLine}
                  strokeDasharray="8 8"
                  stroke="#57D2A9"
                >
                  <Label content={<StatisticsLabel fill={'#57D2A9'} value={safeLine}/>}/>
                </ReferenceLine>
              }
              <Line
                type="line"
                name={name}
                dataKey={"value_indicator"}
                stroke="#8884d8"
                dot={<CustomDot/>}
                connectNulls
              />             
              {/* <Line type="monotone" dataKey="wind_status" stroke="#82ca9d" /> */}
            </LineChart>
        </ResponsiveContainer>
      ) }
    </>
  )
}

export default StatisticsGraph