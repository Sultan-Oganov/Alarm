import 'date-fns';
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import useSound from 'use-sound';
import alarm from './music/lll.mp3'

export default function App() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [clock, setClock] = useState(new Date())
  const [playMusic] = useSound(alarm)

  const handleDateChange = (date) => {
    setSelectedDate(date);

    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()

    let time = ((hours * 3600) + (minutes * 60) + seconds) * 1000

    let hours1 = date.getHours()
    let minutes1 = date.getMinutes()

    let time1 = ((hours1 * 3600) + (minutes1 * 60)) * 1000

    let timeOut = time1 - time
    console.log(timeOut)

    setTimeout(() => {
      playMusic()
      alert('TIME')
    }, timeOut)

  };
  useEffect(() => {
    setInterval(() => {
      setClock(new Date())
    }, 1 * 1000);
  }, [])

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
