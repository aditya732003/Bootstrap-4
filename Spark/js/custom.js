$(document).ready(function(){
	$(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$(".sidebar-toggle").click(function() {
  $(".sidebar").toggleClass("toggled");
});

var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
    { 
      data: [3, 2, 3, 5, 6, 5, 4, 6, 9, 10, 8, 9],
      borderColor: "#007bff",
      backgroundColor: "#007bff",
      borderWidth: 2,
      fill: true,
      label: "Orders"
    }, 
    { 
      data: [5, 4, 10, 15, 16, 12, 10, 13, 20, 22, 18, 20],
      borderColor: "rgba(0, 0, 0, 0.05)",
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderWidth: 2,
      fill: true,
      label: "Sales($)"
    }
    ]
  },
  options: {
    legend: {
      display: false
    },
  tooltips: {
    intersect: false
  },
  hover: {
    intersect: true
  },
  plugins: {
    filler: {
      propagate: false
    }
  },
  elements: {
    point: {
      radius: 0
    }
  },
  scales: {
    xAxes: [{
      reverse: true,
      gridLines: {
         display: false
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true, 
        stepSize: 5
      },
      display: true,
      gridLines: {
      display: false,
      fontColor: "fff"
      }
    }]
  }
}
});

var xValues = ["Chrome", "Firefox", "IE"];
var yValues = [4401, 4003, 1589];
var barColors = [
  "#007bff",
  "#c69500",
  "#bd2130"
];

new Chart("myChart1", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }],
    borderColor: "transparent"
  },
  options: {
  legend: {
    display: false
   },
  cutoutPercentage: 75
  }
});

var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var yValues = [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79];
var barColors = "#007bff";

new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      label: "This year",
      backgroundColor: barColors,
      data: yValues
     }]
  },
  options: {
   legend: {
    display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false
        },
        stacked: false,
        ticks: {
          stepSize: 20
        }
      }],
      xAxes: [{
        stacked: false,
        gridLines: {
          color: "transparent"
        }
      }]
     }
    }  
  });

$('#example').DataTable({
  pageLength: 6,
  lengthChange: false,
  bFilter: false,
  autoWidth: false
});

$('#datepicker-inline').datetimepicker({
    inline: true,
    sideBySide: false,
    format: 'L'
  });
});

