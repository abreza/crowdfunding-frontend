import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { Add, Close } from '@mui/icons-material';
import React, { FC } from 'react';
import { toast } from 'react-toastify';
import { maxMinDate } from 'src/utils/calendarUtils';
import CustomDatePicker from '../../molecules/customDatePicker/CustomDatePicker';
import { ProjectCreateDto, TimelineDto } from 'src/app/services/api.generated';

const Timeline: FC<{ handleChange: any; project: ProjectCreateDto }> = ({
  handleChange,
  project,
}) => {
  const haveNotFieldItem: () => boolean = () => {
    for (let i = 0; i < project.timelines.length; i++) {
      const item = project.timelines[i];
      if (item.name === '' || !item.date) return true;
    }
    return false;
  };

  const addNewTimeline = () => {
    if (haveNotFieldItem()) {
      toast.error('لطفا مورد بودجه‌های قبلی به صورت کامل را تکمیل کنید!');
      return;
    }
    const newTimeline: TimelineDto = {
      name: '',
      date: '',
    };

    handleChange({
      target: {
        name: 'timelines',
        value: [...project.timelines, newTimeline],
      },
    });
  };

  const onChange = (index: number, name: string, value: any) => {
    const timelines = [...project.timelines];
    timelines[index] = {
      ...timelines[index],
      [name]: value,
    };
    handleChange({
      target: { name: 'timelines', value: timelines },
    });
  };

  const deleteItem = (index: number) => {
    const timelines = [...project.timelines];
    timelines.splice(index, 1);
    handleChange({
      target: { name: 'timelines', value: timelines },
    });
  };

  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography variant="h2">زمان‌بندی پروژه</Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom>
          مراحل تکمیل پروژه و آنچه را که می خواهید به حامیان پروژه بازگردانید،
          بیان کنید.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom>
          شرح زمانی
        </Typography>
        <TextField
          name="timeDescription"
          value={project.timeDescription}
          onChange={handleChange}
          placeholder="توضیحی در رابطه با زمان‌بندی مدنظر."
          fullWidth
          multiline
          rows={3}
          sx={{ pt: 1 }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
          مراحل تکمیل پروژه را تعیین کنید.
        </Typography>
        <Grid container sx={{ py: 2 }}>
          {project.timelines.map((item: TimelineDto, index) => (
            <Grid
              item
              container
              xs={12}
              spacing={1}
              alignItems="center"
              key={index}>
              <Grid item xs={8}>
                <TextField
                  value={item.name}
                  onChange={(e) => onChange(index, 'name', e.target.value)}
                  fullWidth
                  size="small"
                  label="مورد قابل تحویل و یا میزان پیشرفت پروژه"
                  placeholder="تکمیل وب‌سایت محصول"
                />
              </Grid>
              <Grid item xs={3}>
                <CustomDatePicker
                  textFieldProps={{
                    variant: 'outlined',
                    fullWidth: true,
                    size: 'small',
                    label: 'تاریخ',
                  }}
                  value={item.date as any}
                  onChange={(value) => onChange(index, 'date', value)}
                  minimumDate={maxMinDate({
                    language: 'fa',
                  })}
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton onClick={() => deleteItem(index)} size="large">
                  <Close fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          ))}
        </Grid>

        <Button
          variant="outlined"
          color="secondary"
          startIcon={<Add />}
          onClick={addNewTimeline}>
          اضافه کردن مورد جدید
        </Button>
      </Grid>
    </Grid>
  );
};

export default Timeline;
