import Chart from 'react-apexcharts';


const TotalWannaGos = ({active, older}) => {
  const options = {
    labels: ['Active', 'Past'],
    colors: ['#f25477', '#4a90e2'],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '83px',
          labels: {
            show: true,
            total: {
              label: "Total WannaGos",
              fontWeight: 'bold',
              show: true,
              showAlways: true,
            },
          },
        },
      },
    },
    legend: {
      show: true,
      floating: false,
      fontSize: '13px',
      position: 'bottom',
      offsetY: -0.9,
      labels: {
        useSeriesColors: true,
      },
    },
  };

  const series = [active, older];

  return (
    <div
      id='chart'
      className='donut-chart'
    >
      <Chart
        options={options}
        series={series}
        type='donut'
      />
    </div>
  );
};

export default TotalWannaGos;

