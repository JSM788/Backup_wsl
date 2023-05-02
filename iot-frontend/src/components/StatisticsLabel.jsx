import { BubbleLabel } from "../styles/EstadisticasStyle"

const StatisticsLabel = (props) =>{
    return (
        <text offset="5" x={props.viewBox.x} y={props.viewBox.y} className="recharts-text recharts-label">
            <tspan fill={props.fill} x="200" dy="-0.3em">{props.value}</tspan>
        </text>
    )
}

export default StatisticsLabel