import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const UserStats = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        height: 60, // Tinggi chart diperkecil
        type: "area",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },
      grid: {
        show: false,
      },
      series: [
        {
          name: "New users",
          data: [6500, 6418, 6456, 6526, 6356, 6456],
          color: "#1A56DB",
        },
      ],
      xaxis: {
        categories: [
          '01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'
        ],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };

    if (chartRef.current && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700">
      {/* Bagian Header */}
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-lg font-bold text-gray-900 dark:text-white">32.4k</h5>
          <p className="text-xs text-gray-500 dark:text-gray-400">Users this week</p>
        </div>
        <div className="flex items-center text-xs font-semibold text-green-500 dark:text-green-500">
          12%
          <svg className="w-2.5 h-2.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
          </svg>
        </div>
      </div>

      {/* Area Chart */}
      <div ref={chartRef} className="mt-1" style={{ height: '60px' }}></div>

      {/* Bagian Footer */}
      <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
        <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          Last 7 days
          <svg className="w-2 h-2 m-1 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
        <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-700 dark:hover:text-blue-500">
          Users Report
          <svg className="w-2 h-2 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default UserStats;