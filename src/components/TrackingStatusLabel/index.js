// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Button } from 'semantic-ui-react';
import Tracker from '../Tracker';
import './trackingStatusLabel.css';


type Props = {
  value: { status: string, date?: string }
};


class TrackingStatusLabel extends React.Component<Props> {
  handleClick = ({ status: string }) => {
    const trackStatusDetails = document.getElementById('trackStatusDetails');
    if (trackStatusDetails) {
      ReactDOM.render(<Tracker />, trackStatusDetails);
    }
  }

  render() {
    const { value } = this.props;
    let button = null;
    if (value !== undefined && value !== null) {
      if (value.status === 'BOOKED') {
        button = (
          <Button size="tiny" className="Labelsize" animated="fade" color="yellow" onClick={this.handleClick}>
            <Button.Content visible>
              <Icon name="cart arrow down" />
              { value.status }
            </Button.Content>
            <Button.Content hidden>
              { value.date }
            </Button.Content>
          </Button>
        );
      } else if (value.status === 'SHIPPED') {
        button = (
          <Button size="tiny" className="Labelsize" animated="fade" color="teal" onClick={this.handleClick}>
            <Button.Content visible>
              <Icon name="shipping" />
              { value.status }
            </Button.Content>
            <Button.Content hidden>
              { value.date }
            </Button.Content>
          </Button>
        );
      } else if (value.status === 'INTRANSIT') {
        button = (
          <Button size="tiny" className="Labelsize" animated="fade" color="blue" onClick={this.handleClick}>
            <Button.Content visible>
              <Icon name="shipping fast" />
              { value.status }
            </Button.Content>
            <Button.Content hidden>
              { value.date }
            </Button.Content>
          </Button>
        );
      } else if (value.status === 'DELIVERED') {
        button = (
          <Button size="tiny" className="Labelsize ui " animated="fade" color="green" onClick={this.handleClick}>
            <Button.Content visible>
              <Icon name="smile outline" />
              { value.status }
            </Button.Content>
            <Button.Content hidden>
              { value.date }
            </Button.Content>
          </Button>
        );
      }
      return button;
    }
    return null;
  }
}

export default TrackingStatusLabel;
