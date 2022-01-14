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

$(".search-toggle").click(function() {
  $(".search-bar").toggleClass("toggled");
});

$(".toggle-btn").click(function() {
  $(".sidebar").toggleClass("toggled");
});

var xValues = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
    { 
      data: [31, 40, 28, 51, 42, 82, 56],
      borderColor: "#4154f1",
      borderWidth: 2,
      fill: false,
      label: "Sales"
    }, 
    { 
      data: [11, 32, 45, 32, 34, 52, 41],
      borderColor: "#2eca6a",
      borderWidth: 2,
      fill: false,
      label: "Revenue"
    },
    { 
      data: [15, 11, 32, 18, 9, 24, 11],
      borderColor: "#ff771d",
      borderWidth: 2,
      fill: false,
      label: "Customers"
    }
    ]
  },
  options: {
    legend: {
      display: true
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
        stepSize: 20
      },
      display: true,
      gridLines: {
      display: true,
      fontColor: "fff"
      }
    }]
  }
}
});

var xValues = ["Sales", "Administration", "Information Technology", "Customer Support", "Development", "Marketing"];

new Chart("myChart1", {
  type: "radar",
  data: {
    labels: xValues,
    datasets: [
    { 
      data: [4200, 3000, 20000, 35000, 50000, 18000],
      borderColor: "#4154f1",
      borderWidth: 2,
      fill: false,
      label: "Allocated Budget"
    }, 
    { 
      data: [5000, 14000, 28000, 26000, 42000, 21000],
      borderColor: "#2eca6a",
      borderWidth: 2,
      fill: false,
      label: "Actual Spending"
    },
    ]
  },
  options: {
    legend: {
      display: true
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
      display: false,
      gridLines: {
         display: false
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true, 
        stepSize: 50,
      },
      display: false,
      gridLines: {
      display: false,
      fontColor: "fff"
      }
    }]
  }
}
});

var xValues = ["Search Engine", "Direct", "Email", "Union Ads", "Video Ads"];
 var yValues = [1048, 735, 580, 484, 300];
 var barColors = [
      "#007bff",
      "#28a745",
      "#ffc107",
      "#dc3545",
      "#17a2b8"
    ];
new Chart("myChart2", {
  type: "doughnut",
 data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {
     display: true
    },
   }
});
$('#example').DataTable({
  pageLength: 5,
  lengthChange: true,
  bFilter: true,
  autoWidth: true,
});
 var btn = $('.scrolltop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});
});

