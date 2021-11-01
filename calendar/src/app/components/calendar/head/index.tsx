import * as React from 'react';
import { Component } from 'react';

export class CalendarTableHead extends Component<{days: string[]}, {}> {

  render() {
    const { days } = this.props;
    return (
      <thead>
        <td>Heading</td>
        {days.map(d=><td key={d}>{d}</td>)}
      </thead>
    );
  }
}
