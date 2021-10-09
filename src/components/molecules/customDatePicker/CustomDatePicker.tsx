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
  TextField,
  TextFieldProps,
  Theme,
} from '@mui/material';
import { CalendarToday } from '@mui/icons-material';
import { humanReadableDate } from 'src/utils/calendarUtils';
import { blue } from '@mui/material/colors';

import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Box } from '@mui/system';

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

  const inputValueHandler = () => {
    let result = '';
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
            sx={{
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
            }}
            onClick={() => setShowCalendar(false)}
          ></Grid>
          <Box
            sx={{
              position: 'fixed',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: '2px 2px 10px grey',
              zIndex: 100,
              backgroundColor: 'white',
              borderRadius: 1,
              overflow: 'hidden',
              pb: 1,
            }}
          >
            <Calendar
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
              alignContent="center"
            >
              <Grid item>
                <Button
                  onClick={cancelClickHandler}
                  sx={{
                    width: 80,
                    marginBottom: 2,
                  }}
                >
                  پاک کردن
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={confirmClickHandler}
                  sx={{
                    width: 80,
                    marginBottom: 2,
                  }}
                >
                  ادامه
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
