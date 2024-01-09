import React from 'react';
import './../App.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Bar} from 'react-chartjs-2'; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(CategoryScale, LinearScale);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display:  false,
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const Dashboard = () => {
  const smallContainersData = [
    { title: '$406,411.29', titleColor : 'green', description: 'Total Revenue' },
    { title: '$620', description: 'Total Jobs Avg' },
    { title: '655', description: 'Tickets Created' },
    { title: '735', description: 'Tickets Scheduled' },
    { title: '$110,448.8', titleColor: 'red', description: 'Outstanding Amount' },
    { title: '105', description: 'Memberships Sold' },
    { title: '436', description: 'Jobs Completed' },
    { title: '65', description: 'Total Cancelled' },
  ];

  const chartData1 = {
    labels: ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds'],
    datasets: [
      {
        backgroundColor: 'rgb(65, 191, 153)',
        borderColor: 'rgb(65, 191, 153)',
        borderWidth: 1,
        hoverBackgroundColor: 'green',
        hoverBorderColor: 'green',
        data: [5.000, 10.000, 15.000, 20.0000, 25.000, 27.000],
      },
    ],
  };

  const chartData2 = {
    labels: ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Maintenance', 'Material Sale'],
    datasets: [
      {
        label: 'Dataset 2',
        backgroundColor: 'rgb(65, 191, 153)',
        borderColor: 'rgb(65, 191, 153)',
        borderWidth: 1,
        hoverBackgroundColor: 'green',
        hoverBorderColor: 'green',
        data: [20.000, 60.00, 40.000, 120.00, 60.000, 80.000, 100.000],
      },
    ],
  };

  return (
    <div className='dashboard'>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ mt: 1 }}> 
          <h2>Company Metrics</h2>
          <Grid container spacing={2}>
            {smallContainersData.map((data, index) => (
              <Grid item xs={3} key={index}>
                <Card style={{ borderLeft: "10px solid rgb(65, 191, 153)" }} sx={{ padding: 1 }}>

                  <CardContent>
                  <Typography variant="h6" style={{ fontStyle: 'bold', color: data.titleColor || 'black' }}>{data.title}</Typography>

                    <Typography>{data.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Bottom section with bar charts */}
        <Grid item xs={6}>
          <h2>Section 2 Heading</h2>
          <Card>
            <CardContent>
            <Bar data={chartData1} options={options} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <h2>Section 2 Heading</h2>
          <Card>
            <CardContent>
            <Bar data={chartData2} options={options} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
