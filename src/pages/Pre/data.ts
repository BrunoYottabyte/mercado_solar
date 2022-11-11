const options2 = {
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
    zoom: {
        enabled: true
    },
    download: false
  },
  grid: {
    show: true,
    borderColor: '#E9ECEF',
    strokeDashArray: 0,
    position: 'back',
    xaxis: {
        lines: {
            show: true
        }
    },
    yaxis: {
        lines: {
            show: true
        }
    },
},

  plotOptions: {
    bar: {
      columnWidth: '85%',
      borderRadius: 6,
    }
  },
  colors: ['#61686D'],
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: 'text',
    categories: [...Array(21).keys()].map(i => i.toString()),
    labels: {
      rotate: -90
    }
  },
  yaxis: {
    labels: {
      formatter: function (y) {
        return y.toFixed(0);
      },
    }
    
  }, 
  responsive: [
    {
  
      breakpoint: 1000,
      options: {
        chart: {
          type: 'bar',
          height: 400,
          width: 285,
          offsetX: -28
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
}

const options = {
  chart: {
    type: 'bar',
    height: 350,
    width: '100%',
    toolbar: {
      show: false
    },
    zoom: {
        enabled: true
    },
    download: false
  },
  grid: {
    show: true,
    borderColor: '#E9ECEF',
    strokeDashArray: 0,
    position: 'back',
    xaxis: {
        lines: {
            show: true
        }
    },
    yaxis: {
        lines: {
            show: true
        }
    },
},

  plotOptions: {
    bar: {
      columnWidth: '85%',
      borderRadius: 4,
    }
  },
  colors: ['#FEB019'],
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    labels: {
      formatter: function (y) {
        return y.toFixed(0);
      },
    }
    
  }, 
  xaxis: {
    type: 'text',
    categories: [...Array(21).keys()].map(i => i.toString()),
    labels: {
      rotate: -90,
    }
  },
  responsive: [
    {
  
      breakpoint: 1000,
      options: {
        chart: {
          type: 'bar',
          height: 400,
          width: 285,
          offsetX: -28
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
}


export { options, options2 }