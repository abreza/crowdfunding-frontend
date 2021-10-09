import { Box, Chip, Grid, TextField, Typography } from '@mui/material';
import {
  Category as CategoryIcon,
  Computer as ComputerIcon,
  Functions as FunctionsIcon,
  OutdoorGrill,
} from '@mui/icons-material';
import { FC } from 'react';
import { Category, ProjectCreateDto } from 'src/app/services/api.generated';

const chips: { icon: any; label: string; category: Category }[] = [
  {
    icon: ComputerIcon,
    label: 'کامپیوتر',
    category: 'COMPUTER',
  },
  {
    icon: CategoryIcon,
    label: 'فیزیک',
    category: 'PHYSICS',
  },
  {
    icon: OutdoorGrill,
    label: 'شیمی',
    category: 'CHEMISTRY',
  },
  {
    icon: FunctionsIcon,
    label: 'ریاضی',
    category: 'MATHEMATICS',
  },
];

const BasicDetails: FC<{ handleChange: any; project: ProjectCreateDto }> = ({
  handleChange,
  project,
}) => {
  const onClickBadge = (badge: Category) => {
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

        <TextField
          name="subject"
          value={project.subject}
          onChange={handleChange}
          placeholder="توضیح یک جمله‌ای از فعالیتی که می‌کنید."
          fullWidth
          sx={{ pt: 1 }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom sx={{ pt: 1 }}>
          دسته‌بندی
        </Typography>
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
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              m: 1,
            }}
          >
            {chips.map((chip) => (
              <Chip
                key={chip.category}
                size="small"
                icon={<chip.icon />}
                label={chip.label}
                clickable
                color="secondary"
                onClick={() => onClickBadge(chip.category)}
                variant={
                  project.category === chip.category ? 'filled' : 'outlined'
                }
                sx={{ mx: 1, px: 0.5 }}
              />
            ))}
          </Box>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom>
          مرکز علمی (اختیاری)
        </Typography>

        <TextField
          name="institution"
          value={project.institution}
          onChange={handleChange}
          placeholder="مکان اجرایی فعالیت"
          fullWidth
          sx={{ pt: 1 }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom>
          خلاصه
        </Typography>

        <TextField
          name="summary"
          value={project.summary}
          onChange={handleChange}
          placeholder="توضیح مختصر در رابطه با فعالیت مورد نظر"
          fullWidth
          multiline
          rows={4}
          sx={{ pt: 1 }}
        />
      </Grid>
    </Grid>
  );
};

export default BasicDetails;
