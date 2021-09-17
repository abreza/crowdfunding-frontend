import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { Add, Close } from '@mui/icons-material';
import {
  ProjectDto,
  TechnicalDescriptiontDto,
} from 'types/project';
import { FC } from 'react';
import { toast } from 'react-toastify';

const Research: FC<{ handleChange: any; project: ProjectDto }> = ({
  handleChange,
  project,
}) => {
  const haveNotFieldItem: () => boolean = () => {
    for (let i = 0; i < project.technicalDescriptions.length; i++) {
      const item = project.technicalDescriptions[i];
      if (item.name === '' || item.value === '') return true;
    }
    return false;
  };

  const addNewTechnicalDescription = () => {
    if (haveNotFieldItem()) {
      toast.error('لطفا مورد بودجه‌های قبلی به صورت کامل را تکمیل کنید!');
      return;
    }
    const newTechnicalDescription: TechnicalDescriptiontDto = {
      name: '',
      value: '',
    };

    handleChange({
      target: {
        name: 'technicalDescriptions',
        value: [...project.technicalDescriptions, newTechnicalDescription],
      },
    });
  };

  const onChange = (index: number, name: string, value: string) => {
    const technicalDescriptions = [...project.technicalDescriptions];
    technicalDescriptions[index] = {
      ...technicalDescriptions[index],
      [name]: value,
    };
    handleChange({
      target: { name: 'technicalDescriptions', value: technicalDescriptions },
    });
  };

  const deleteItem = (index: number) => {
    const technicalDescriptions = [...project.technicalDescriptions];
    technicalDescriptions.splice(index, 1);
    handleChange({
      target: { name: 'technicalDescriptions', value: technicalDescriptions },
    });
  };

  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography variant="h2">پژوهش</Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom>
          این بخش ها به حامیان کمک می کنند تا پیشینه پروژه شما را بفهمند و
          بدانند چرا این پروژه جالب است و ارزش بررسی دارد. سعی کنید طوری بنویسید
          که انگار پروژه خود را برای دوستی که در زمینه تحقیق شما نیست توضیح می
          دهید.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom>
          ایده اولیه شکل‌گیری این پروژه چیست؟
        </Typography>
        <Box pt={1}>
          <TextField
            name="projectFirstIdea"
            value={project.projectFirstIdea}
            onChange={handleChange}
            placeholder="توضیحی مختصر در رابطه با ایده اصلی پشت این پروژه."
            fullWidth
            multiline
            rows={3}
            variant="outlined"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom>
          اهمیت اصلی این پروژه چیست؟
        </Typography>
        <Box pt={1}>
          <TextField
            name="projectMainIdea"
            value={project.projectMainIdea}
            onChange={handleChange}
            placeholder="توضیح دهید که با تکمیل این پروژه به چه ارزش‌هایی خواهیم رسید."
            fullWidth
            multiline
            rows={3}
            variant="outlined"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom>
          هدف شما از انجام این پروژه چیست؟
        </Typography>
        <Box pt={1}>
          <TextField
            name="projectGoal"
            value={project.projectGoal}
            onChange={handleChange}
            placeholder="دلایل و اهداف تیمتان برای انجام این پروژه چیست؟"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
          />
        </Box>
      </Grid>
      <Grid item>
        <Typography variant="h3" gutterBottom>
          مشخصات فنی
        </Typography>
        <Box py={2}>
          <Grid container>
            {project.technicalDescriptions.map((item, index) => (
              <Grid
                item
                container
                xs={12}
                spacing={1}
                alignItems="center"
                key={index}>
                <Grid item xs={6}>
                  <TextField
                    value={item.name}
                    onChange={(e) => onChange(index, 'name', e.target.value)}
                    variant="outlined"
                    fullWidth
                    size="small"
                    label="مورد"
                    placeholder="ابعاد"
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    value={item.value}
                    onChange={(e) => onChange(index, 'value', e.target.value)}
                    variant="outlined"
                    fullWidth
                    size="small"
                    label="مقدار"
                    placeholder="۲۰ × ۳۰ × ۵۰"
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
        </Box>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<Add />}
          onClick={addNewTechnicalDescription}>
          اضافه کردن مورد جدید
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom>
          اطلاعات اضافی (اختیاری)
        </Typography>
        <Box pt={1}>
          <TextField
            name="projectAdditionalInfo"
            value={project.projectAdditionalInfo}
            onChange={handleChange}
            placeholder="توضیحات تکمیلی مدنظرتان را شرح دهید."
            fullWidth
            multiline
            rows={3}
            variant="outlined"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Research;
