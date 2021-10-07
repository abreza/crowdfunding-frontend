import { Button, Grid, Hidden, Avatar, LinearProgress } from '@mui/material';
import { Typography, Divider } from '@mui/material';
import { Rating } from '@mui/material';
import { HomepageContext } from 'src/contexts/HomepageContext';
import { FC, useContext } from 'react';
import { dateFormatter } from 'src/utils/dateFormatterUtils';

type ProjectReviewProps = {};
type RatingLineProps = {
  rating: number;
  percent: number;
};

type ReviewLineProps = {
  name: string;
  date: string | Date;
  avatar?: string;
  rate: number;
  review: string;
};

const RatingLine: FC<RatingLineProps> = ({ rating, percent }) => {
  return (
    <Grid
      container
      item
      spacing={2}
      alignItems="center"
      justifyContent="center">
      <Grid item xs={6} sm={7}>
        <LinearProgress
          variant="determinate"
          value={percent}
          color="secondary"
        />
      </Grid>
      <Grid item container xs={6} sm={5} alignItems="center" spacing={1}>
        <Grid item>
          <Rating value={rating} readOnly />
        </Grid>
        <Hidden lgDown>
          <Grid item>
            <Typography variant="h5">{percent}%</Typography>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};

const ReviewLine: FC<ReviewLineProps> = ({
  name,
  date,
  avatar,
  rate,
  review,
}) => {
  return (
    <Grid item container direction="row" alignItems="center" spacing={1}>
      <Grid item sm={1}>
        <Avatar src={avatar} />
      </Grid>
      <Grid item xs={3} sm={2}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="subtitle1" color="textSecondary">
              {dateFormatter({
                date,
              })}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" color="textSecondary">
              سرمایه‌گذار
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={7} sm={9}>
        <Grid container direction="column" alignItems="flex-start" spacing={1}>
          <Grid item>
            <Rating value={rate} readOnly />
          </Grid>
          <Grid item>{review}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ProjectReview: FC<ProjectReviewProps> = () => {
  const { openAuthDialog } = useContext(HomepageContext);

  const addComment = () => {
    openAuthDialog();
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        نظر کارشناس
      </Typography>
      <Typography variant="body1" gutterBottom>
        تیم با روحیه و توانمندی هستند. همچنین محصول مورد نظرشان بسیار کاربردی و
        مورد استفاده صنعتی است.
        <br />
        تنها نیاز به تامین‌مالی برای رشد سریعتر دارند.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Grid container alignItems="center" justifyContent="center" spacing={3}>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sm={3}
          xs={12}
          spacing={1}>
          <Grid item>
            <Typography variant="h1" component="h6">
              3.1
            </Typography>
          </Grid>
          <Grid item>
            <Rating value={3.1} readOnly />
          </Grid>
          <Grid item>
            <Typography variant="body1">میانگین امتیاز</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          sm={9}
          xs={12}>
          <RatingLine rating={5} percent={40} />
          <RatingLine rating={4} percent={45} />
          <RatingLine rating={3} percent={10} />
          <RatingLine rating={2} percent={5} />
          <RatingLine rating={1} percent={0} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={addComment}>
            افزودن دیدگاه
          </Button>
        </Grid>
      </Grid>
      <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
        دیدگاه‌ها
      </Typography>
      <Grid container direction="row" spacing={2} sx={{ mb: 2 }}>
        <ReviewLine
          name="علی احتشامی"
          date={new Date()}
          rate={4}
          review="بنظر به همه جوانب کار دقت شده. واقعا از تیم طراحی محصول تشکر می‌کنم."
        />
        <ReviewLine
          name="مرتضی ابوالقاسمی"
          date={new Date()}
          rate={4}
          review="بنظر به همه جوانب کار دقت شده. واقعا از تیم طراحی محصول تشکر می‌کنم."
        />
      </Grid>
    </div>
  );
};

export default ProjectReview;
