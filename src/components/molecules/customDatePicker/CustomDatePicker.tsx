import { FC, useState } from 'react';
import {
  DayValue,
  Day,
  DayRange,
  Calendar,
} from '@hassanmojab/react-modern-calendar-datepicker';
import {
  Button,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
  TextFieldProps,
  Theme,
} from '@material-ui/core';
import { CalendarToday } from '@material-ui/icons';
import { humanReadableDate } from 'utils/calendarUtils';
import { blue } from '@material-ui/core/colors';

import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';

const useStyles = makeStyles((theme: Theme) => ({
  backgroundCalendar: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    height: '100%',
    position: 'fixed',
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
    backdropFilter: 'blur(2px)',
    zIndex: 100,
  },
  calendarBox: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '2px 2px 10px grey',
    zIndex: 100,
    backgroundColor: 'white',
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
    paddingBottom: theme.spacing(1),
  },
  calendar: {
    boxShadow: 'none',
    border: 'none',
  },
  btn: {
    width: theme.spacing(7 * 2),
    marginBottom: theme.spacing(2),
  },
}));

type CustomDatePickerProps = {
  textFieldProps?: TextFieldProps;
  value: DayValue | DayRange;
  onChange: (value: DayValue | DayRange) => void;
  minimumDate?: Day;
  maximumDate?: Day;
};

const CustomDatePicker: FC<CustomDatePickerProps> = ({
  textFieldProps,
  value,
  onChange,
  minimumDate,
  maximumDate,
}) => {
  const [date, setDate] = useState(value);
  const [showCalendar, setShowCalendar] = useState(false);

  const classes = useStyles();

  const inputValueHandler = () => {
    let result: string = '';
    if (!value) {
      result = '';
    }
    if ((value as Day)?.day) {
      result = humanReadableDate(value as DayValue);
    }
    if ((value as DayRange)?.from && (value as DayRange)?.to) {
      const { from, to } = value as DayRange;
      let partOne = '',
        partTwo = '';
      if (from) {
        partOne = humanReadableDate(from);
      }
      if (to) {
        partTwo = humanReadableDate(to);
      }
      result = `${partOne} ${!partOne && !partTwo ? '' : 'تا'} ${partTwo}`;
    }

    return result;
  };
  const confirmClickHandler = () => {
    onChange(date);
    setShowCalendar(false);
  };
  const cancelClickHandler = () => {
    if ((date as Day)?.day) {
      setDate(null);
      onChange(null);
    }
    if ((date as DayRange)?.from || (date as DayRange)?.to) {
      setDate({ from: null, to: null });
      onChange({ from: null, to: null });
    }
  };
  const dateChangeHandler = (v: DayValue | DayRange) => {
    setDate(v);
  };

  return (
    <div>
      <TextField
        onClick={() => setShowCalendar(true)}
        value={inputValueHandler()}
        autoComplete="off"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <CalendarToday />
            </InputAdornment>
          ),
        }}
        {...textFieldProps}
      />
      {showCalendar && (
        <div>
          <Grid
            container
            className={classes.backgroundCalendar}
            onClick={() => setShowCalendar(false)}></Grid>
          <div className={classes.calendarBox}>
            <Calendar
              calendarClassName={classes.calendar}
              value={date as DayValue}
              onChange={dateChangeHandler}
              shouldHighlightWeekends
              locale={'fa'}
              minimumDate={minimumDate}
              maximumDate={maximumDate}
              colorPrimary={blue[500]}
              colorPrimaryLight={blue[100]}
            />
            <Grid
              container
              justifyContent="space-evenly"
              alignItems="center"
              alignContent="center">
              <Grid item>
                <Button onClick={cancelClickHandler} className={classes.btn}>
                  پاک کردن
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={confirmClickHandler} className={classes.btn}>
                  ادامه
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
