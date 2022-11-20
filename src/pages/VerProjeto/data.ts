const options = {
  chart: {
    type: "bar",
    height: 350,
    width: '100%',
    toolbar: {
      show: false
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "75%",
      endingShape: "rounded",
      borderRadius: 6,
    },
  },
  colors: ["#FEB019"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " KHW";
      },
    },
  },
  responsive: [
    {
  
      breakpoint: 480,
      options: {
        chart: {
          type: 'bar',
          height: 350,
          width: 330,
          offsetX: -12
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        
        legend: {
          position: "bottom"
        },
        xaxis: {
          labels: {
            show: false
          }
        }
      }
    }
  ]
};

export {options}