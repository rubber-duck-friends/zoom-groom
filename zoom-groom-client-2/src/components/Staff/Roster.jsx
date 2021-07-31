import * as React from 'react';
// import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  ViewSwitcher,
  Toolbar,
  DateNavigator,
  TodayButton,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';


// const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2021-07-25T09:45', endDate: '2021-07-25T11:00', title: 'Fido: Bath' },
  { startDate: '2021-07-25T12:00', endDate: '2021-07-25T13:30', title: 'Tess: Clip' },
];




const Roster = () => (

  <Paper>
    <Scheduler
      data={schedulerData}
    >
      <ViewState
        //TODO
        //This sets a default start date, it can be controlled to be the current date but I will add this later :)
        defaultCurrentDate="2021-07-25"
      />
      <DayView
        startDayHour={8}
        endDayHour={14}
      />
      <WeekView
        startDayHour={9}
        endDayHour={19}
      />
      <WeekView
        name="work-week"
        displayName="Work Week"
        excludedDays={[0, 6]}
        startDayHour={9}
        endDayHour={19}
      />
      <MonthView />
      <DayView />

      <Toolbar />
      <DateNavigator />
      <TodayButton />
      <ViewSwitcher />
      <Appointments />
    </Scheduler>
  </Paper>

);

export default Roster