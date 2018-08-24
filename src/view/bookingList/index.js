/* @flow */

import * as React from 'react';
import Table from 'components/Table';
import TrackingStatusLabel from 'components/TrackingStatusLabel';
import DatePicker from 'components/DatePicker';
import './bookingList.css';

const gridOptions = {
  defaultColDef: {
    // set every column width
    width: 190,
    headerComponentParams: {
      menuIcon: 'fa-bars',
    },
    cellStyle: {
      display: 'flex',
      'justify-content': 'flex-start',
      'align-items': 'center',
    },
  },
  width: '100%',
  height: 500,
  rowStyle: { },
  rowHeight: 40,
  frameworkComponents: {
    trackStatusLabelRenderer: TrackingStatusLabel,
  },

  columnDefs: [
    { headerName: 'LR No', field: 'lr', pinned: 'left' },
    { headerName: 'Booking Date', field: 'bookingDate' },
    { headerName: 'Source', field: 'source' },
    { headerName: 'Destination', field: 'destination' },
    { headerName: 'Receiver Name', field: 'recv_name', pinned: 'left' },
    {
      headerName: 'Booking Invoice',
      field: 'grand_total',
      pinned: 'right',
      cellStyle: {
        display: 'flex',
        'justify-content': 'flex-end',
        'align-items': 'center',
      },
    },
    {
      headerName: 'TrackingStatus',
      field: 'tracking',
      cellRenderer: 'trackStatusLabelRenderer',
      pinned: 'right',
      cellStyle: {
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
      },
    },
  ],

  columnTypes: {
    editableColumn: { editable: true },
  },
};

const BookingsList = () => (
  <div
    className="BookingListPage"
  >
    <div
      className="BookingListFilterDiv"
    >
      <div
        style={{ width: '33%' }}
      >
        <span>
          <b>
            Time Range
          </b>
        </span>
        <br />
        <DatePicker />
      </div>
    </div>
    <br />
    <div>
      <Table gridOptions={gridOptions} dataApi="http://localhost:8000" />
    </div>
  </div>
);

export default BookingsList;
