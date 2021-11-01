import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { CalendarTable } from '../../components/calendar/table';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Test Calendar</title>
        <meta name='description' content='A simple test application' />
      </Helmet>
      <h1> Welcome to this test calendar </h1>
      <CalendarTable/>
    </>
  );
}
