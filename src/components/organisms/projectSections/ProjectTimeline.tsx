import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { FC, useContext } from 'react';
import { ProjectContext } from 'src/contexts/ProjectContext';
import { dateFormatter } from 'src/utils/dateFormatterUtils';

export const ProjectTimeline: FC = () => {
  const { timelines = [] } = useContext(ProjectContext);
  return (
    <>
      <Timeline position="alternate">
        {timelines.map((timeline, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent color="text.secondary">
              {dateFormatter({ date: timeline.date })}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{timeline.name}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};
