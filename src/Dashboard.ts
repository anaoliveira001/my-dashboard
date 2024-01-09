// Dashboard.ts

/**
 * Represents a data point in the chart.
 */
export interface ChartData {
    /**
     * The label for the data point.
     */
    label: string;
  
    /**
     * The value of the data point.
     */
    value: number;
  }
  
  /**
   * Represents a row in the table.
   */
  export interface TableRow {
    /**
     * The cells in the row.
     */
    cells: string[];
  }
  
  /**
   * Represents the data needed to display a dashboard.
   */
  export interface Dashboard {
    /**
     * The title of the dashboard.
     */
    title: string;
  
    /**
     * The data for the chart.
     */
    chartData: ChartData[];
  
    /**
     * The data for the table.
     */
    tableData: TableRow[];
  }