import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Close, Add } from '@mui/icons-material';
import React, { FC } from 'react';
import Link from 'next/link';
import { BudgetDto, ProjectDto } from 'types/project';
import { toast } from 'react-toastify';

const Budget: FC<{ handleChange: any; project: ProjectDto }> = ({
  handleChange,
  project,
}) => {
  const haveNotFieldItem: () => boolean = () => {
    for (let i = 0; i < project.budgets.length; i++) {
      const budget = project.budgets[i];
      if (budget.title === '' || budget.value === 0) return true;
    }
    return false;
  };

  const addNewBudget = () => {
    if (haveNotFieldItem()) {
      toast.error('لطفا مورد بودجه‌های قبلی به صورت کامل را تکمیل کنید!');
      return;
    }
    const newBudget: BudgetDto = {
      title: '',
      value: 0,
    };

    handleChange({
      target: { name: 'budgets', value: [...project.budgets, newBudget] },
    });
  };

  const onChange = (index: number, name: string, value: string | number) => {
    const budgets = [...project.budgets];
    budgets[index] = { ...budgets[index], [name]: value };
    handleChange({
      target: { name: 'budgets', value: budgets },
    });
  };

  const deleteItem = (index: number) => {
    const budgets = [...project.budgets];
    budgets.splice(index, 1);
    handleChange({
      target: { name: 'budgets', value: budgets },
    });
  };

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h2">اهداف مالی</Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom>
          به طور متوسط پروژه با بودجه کمتر از ۲۰۰ میلیون تومان شروع می‌شود. ما
          به همه محققان توصیه می کنیم بودجه خود را کمترین میزان لازم برای انجام
          تحقیقات تعیین کنند.
        </Typography>
        <Typography gutterBottom>
          ما یک بستر بودجه
          <Link href="/"> همه یا هیچ</Link> هستیم.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3" gutterBottom>
          موارد بودجه
        </Typography>
        <Typography gutterBottom>
          سعی کنید هنگام برشمردن موارد بودجه خود تا حد ممکن شفاف باشید. هدف
          بودجه پروژه شما به طور خودکار به عنوان مجموع تمام هزینه های بودجه
          محاسبه می شود.
        </Typography>
        <Grid container sx={{ py: 2 }}>
          {project.budgets.map((budget, index) => (
            <Grid
              item
              container
              xs={12}
              spacing={1}
              alignItems="center"
              key={index}>
              <Grid item xs={7}>
                <TextField
                  value={budget.title}
                  onChange={(e) => onChange(index, 'title', e.target.value)}
                  variant="outlined"
                  fullWidth
                  size="small"
                  label="مورد بودجه"
                  placeholder="تبلیغات"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="number"
                  value={budget.value}
                  onChange={(e) => onChange(index, 'value', +e.target.value)}
                  variant="outlined"
                  fullWidth
                  size="small"
                  label="مبلغ"
                  placeholder="۱۰۰٫۰۰۰٫۰۰۰"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">تومان</InputAdornment>
                    ),
                  }}
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
          onClick={addNewBudget}>
          اضافه کردن مورد جدید
        </Button>
      </Grid>
      <Grid item>
        <Typography variant="h6" component="label" gutterBottom>
          این موارد بودجه چگونه به شما در تکمیل پروژه، کمک خواهد کرد؟
        </Typography>
        <TextField
          name="budgetReason"
          value={project.budgetReason}
          onChange={handleChange}
          placeholder="تیم ما در نظر دارد با تکمیل زنجیره ..."
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          sx={{ pt: 1 }}
        />
      </Grid>
    </Grid>
  );
};

export default Budget;
