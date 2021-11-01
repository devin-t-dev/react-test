import * as React from 'react';
import { CalendarTableHead } from '../head';
import { CalendarTableRoom } from '../room';
import { CalendarRoom } from '../../../entities/CalendarRoom';
import { Component } from 'react';
import { CalendarDay } from '../../../entities/CalendarDay';
import { RoomState } from '../RoomState';

export class CalendarTable extends Component<any, RoomState> {
  room: CalendarRoom = new CalendarRoom();
  days: string[] = ['2021-10-12', '2021-10-13'];
  //state: RoomState = {value: this.room};
  createDays = () => { //TODO: Why on heart it's needing of ()?
    this.setState((state, prop) => {
      let r = new CalendarRoom();
      r.days=[{day:'2021-10-12', open:true}, {day:'2021-10-13', open:false}];
      return { value: r };
    })
  };

  constructor(props) {
    super(props);
    this.state = { value: this.room };
  }

  render() {
    // this.setState((prev, newState) => {
    //   return { value: this.room };
    // });
    return (
      <>
        <span>{JSON.stringify(this.state.value)}</span>
        <table className='tableCalendarClass'>
          <CalendarTableHead days={this.days} />
          <CalendarTableRoom room={this.state.value} />
        </table>
        <a href={'#'} onClick={this.createDays}>test</a>
      </>
    );
  }

}
