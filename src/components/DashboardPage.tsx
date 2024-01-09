import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import AWS from 'aws-sdk';
import { render } from '@testing-library/react';
import'./DashboardPage.css'; //css import

test('test passa, thaks, yhaaaaaa', () => {
  render(<DashboardPage />);
});

// Data Demonstration
interface ChartData {
  label: string;
  value: number;
}

interface TableRowData {
  id: string;
  name: string;
  email: string;
}

const chartData: ChartData[] = [
  { label: 'Data 1', value: 100 },
  { label: 'Data 2', value: 200 },
];

const DashboardPage: React.FC = () => {
  const [tableData, setTableData] = useState<TableRowData[]>([]);
  const chartLabels = chartData.map(data => data.label);
  const chartValues = chartData.map(data => data.value);

  const chartDataSet = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Chart Data',
        backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(54, 162, 235, 0.6)'],
        borderColor: ['rgba(75,192,192,1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
        hoverBackgroundColor: ['rgba(75,192,192,0.8)', 'rgba(54, 162, 235, 0.8)'],
        hoverBorderColor: ['rgba(75,192,192,1)', 'rgba(54, 162, 235, 1)'],
        data: chartValues,
      },
    ],
  };

  // Configure AWS SDK
  useEffect(() => {
    AWS.config.update({
      region: 'US', // AWS region
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    });

    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: 'client_view', // DynamoDB table name
    };

    dynamoDB.scan(params, (err, data) => {
      if (err) {
        console.error('Error fetching data from DynamoDB', err);
      } else {
        setTableData(data.Items as TableRowData[]);
      }
    });
  }, []);

  return (
    <div>
      <h2>Chart</h2>
      <div>
        <Bar data={chartDataSet} />
      </div>

      <h2>Table</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DashboardPage;
