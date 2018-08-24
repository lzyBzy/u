// @flow

import * as React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import axios from 'axios';


type State = {
  rowData: any
};

type Props ={
   dataApi: string,
   gridOptions: any,
};

class Table extends React.Component<Props, State> {
  state = {
    rowData: [],
  };


  componentDidMount() {
    const { dataApi } = this.props;
    axios.get(dataApi)
      .then((res) => {
        console.log(res);
        const rowData = res.data;
        this.setState({ rowData });
      });
    console.log(this.state);
  }

  render() {
    const { gridOptions } = this.props;
    const { rowData } = this.state;
    return (
      <div
        className="ag-theme-balham"
        style={{ height: gridOptions.height, width: gridOptions.width }}
      >
        <AgGridReact
          columnDefs={gridOptions.columnDefs}
          rowData={rowData}
          rowHeight={gridOptions.rowHeight}
          enableSorting="true"
          enableFilter="true"
          animateRows="true"
          scrollbarWidth={0}
          floatingFilter
          rowStyle={gridOptions.rowStyle}
          frameworkComponents={gridOptions.frameworkComponents}
          defaultColDef={gridOptions.defaultColDef}
        />
      </div>

    );
  }
}

export default Table;
