import { Box, Chip, Grid, TextField, Typography, Theme } from '@mui/material';
import {
  Category,
  Computer as ComputerIcon,
  Functions as FunctionsIcon,
  OutdoorGrill,
} from '@mui/icons-material';
import { FC } from 'react';
import { ProjectDto, CategoryEnum } from 'types/project';

const BasicDetails: FC<{ handleChange: any; project: ProjectDto }> = ({
  handleChange,
  project,
}) => {
  const onClickBadge = (badge: CategoryEnum) => {
    handleChange({ target: { name: 'category', value: badge } });
  };

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h2">اطلاعات پایه</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom>
          موضوع
        </Typography>

        <Box pt={1}>
          <TextField
            name="subject"
            value={project.subject}
            onChange={handleChange}
            placeholder="توضیح یک جمله‌ای از فعالیتی که می‌کنید."
            fullWidth
            variant="outlined"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box py={1}>
          <Typography variant="h6" component="label" gutterBottom>
            دسته‌بندی
          </Typography>
        </Box>
        <div>
          <Typography gutterBottom>
            یک دسته را برای تحقیقات خود انتخاب کنید. اینها به عنوان فیلتر در
            صفحه کشف ما استفاده می شوند و می توانند به افراد در پیدا کردن پروژه
            شما کمک کنند.
          </Typography>
          <Typography>
            برای انتخاب یک دسته ، روی آن کلیک کنید و مجدداً برای لغو انتخاب آن
            کلیک کنید.
          </Typography>
          <Box
            p={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              '> *': {
                m: 0.5,
                py: 0.2,
                px: 1,
              },
            }}>
            <Chip
              size="small"
              icon={<ComputerIcon />}
              label={'کامپیوتر'}
              clickable
              color="secondary"
              onClick={() => onClickBadge(CategoryEnum.COMPUTER)}
              variant={
                project.category === CategoryEnum.COMPUTER
                  ? 'filled'
                  : 'outlined'
              }
            />
            <Chip
              size="small"
              icon={<Category />}
              label={'فیزیک'}
              clickable
              color="secondary"
              onClick={() => onClickBadge(CategoryEnum.PHYSICS)}
              variant={
                project.category === CategoryEnum.PHYSICS
                  ? 'filled'
                  : 'outlined'
              }
            />
            <Chip
              size="small"
              icon={<OutdoorGrill />}
              label={'شیمی'}
              clickable
              color="secondary"
              onClick={() => onClickBadge(CategoryEnum.CHEMISTRY)}
              variant={
                project.category === CategoryEnum.CHEMISTRY
                  ? 'filled'
                  : 'outlined'
              }
            />
            <Chip
              size="small"
              icon={<FunctionsIcon />}
              label={'ریاضی'}
              clickable
              color="secondary"
              onClick={() => onClickBadge(CategoryEnum.MATHEMATICS)}
              variant={
                project.category === CategoryEnum.MATHEMATICS
                  ? 'filled'
                  : 'outlined'
              }
            />
          </Box>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom>
          مرکز علمی (اختیاری)
        </Typography>

        <Box pt={1}>
          <TextField
            name="institution"
            value={project.institution}
            onChange={handleChange}
            placeholder="مکان اجرایی فعالیت"
            fullWidth
            variant="outlined"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom>
          خلاصه
        </Typography>

        <Box pt={1}>
          <TextField
            name="summary"
            value={project.summary}
            onChange={handleChange}
            placeholder="توضیح مختصر در رابطه با فعالیت مورد نظر"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default BasicDetails;
