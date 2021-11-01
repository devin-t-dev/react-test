import * as React from 'react';
import { Component } from 'react';
import { CalendarRoom } from '../../../entities/CalendarRoom';
import { RoomState } from '../RoomState';


export class CalendarTableRoom extends Component<{room:CalendarRoom}, {}> {

  render() {
    const { room } = this.props;
    // create the first line
    var columns = [<td> Room Line {room.id} {room.name} </td>];
    room.days?.map(day => {
      columns.push(<td>{day.open ? 'Open' : 'close'}</td>)
    })
    return (
      <>
        <tr>
          {columns}
        </tr>
      </>
    );
  }
}
