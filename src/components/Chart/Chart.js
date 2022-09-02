import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const maxVal = Math.max(
        ...props.dataPoints.map((dataPoint) => dataPoint.value)
    );
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    value={dataPoint.value}
                    label={dataPoint.label}
                    maxVal={maxVal}
                    key={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
