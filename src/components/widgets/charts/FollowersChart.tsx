
import CardBox from 'src/components/shared/CardBox';
import Chart from 'react-apexcharts';

const FollowersChart = () => {
  const ChartData: any = {
    series: [
      {
        name: "",
        data: [0, 210, 180, 310, 270, 270, 370, 270],
      },
    ],
    chart: {
      type: "area",
      fontFamily: `inherit`,
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    colors: ["var(--color-primary)"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      color: ["var(--color-primary)"],
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.2,
        opacityTo: 0.8,
        stops: [100],
      },
    },
    tooltip: {
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return (
    <>
      <CardBox className="p-0 overflow-hidden">
        <div className="flex justify-between p-6 items-end">
          <div>
            <h5 className="card-title">2,545</h5>
            <p className="card-subtitle">Followers</p>
          </div>
          <span className="text-success text-sm">+1.20%</span>
        </div>

        <Chart
          options={ChartData}
          series={ChartData.series}
          type="area"
          height='100px'
          width='100%'
        />
      </CardBox>
    </>
  );
};

export default FollowersChart;
