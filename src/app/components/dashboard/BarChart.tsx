import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = () => {
  // chart color
  const theme = useTheme();

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: true,
      },
      height: 370,
    },
    colors: [theme.palette.secondary.main],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "42%",
        // borderRadius: [6],
        // borderRadiusApplication: "end",
        // borderRadiusWhenStacked: "all",
      },
    },

    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      tickAmount: 4,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart: any = [
    {
      name: "Pixel ",
      data: [9, 5, 3, 7, 5, 10, 3],
    },
    // {
    //   name: "Ample ",
    //   data: [6, 3, 9, 5, 4, 6, 4],
    // },
  ];

  return (
    <Box className="rounded-bars">
      {/* <Chart
        options={optionscolumnchart}
        series={seriescolumnchart}
        type="bar"
        width={"100%"}
        height="370px"
      /> */}
    </Box>
  );
};

export default BarChart;
