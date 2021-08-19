import { Paper, Box, Tabs, Tab } from "@material-ui/core";
import { FC, useState } from "react";
import ProjectBudget from "./ProjectBudget";
import ProjectDescription from "./ProjectDescription";
import ProjectFounds from "./ProjectFounds";
import ProjectReviews from "./ProjectReviews";
import ProjectTechnical from "./ProjectTechnical";

type ProjectTabsProps = {};

const tabs: { name: string; component: FC<any> }[] = [
  {
    name: "توضیحات",
    component: ProjectDescription,
  },
  {
    name: "اطلاعات فنی",
    component: ProjectTechnical,
  },
  {
    name: "بودجه",
    component: ProjectBudget,
  },
  {
    name: "سرمایه‌گذاری",
    component: ProjectFounds,
  },
  {
    name: "نظرات",
    component: ProjectReviews,
  },
];

const ProjectTabs: FC<ProjectTabsProps> = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const TabComponent = tabs[tabIndex].component;

  return (
    <>
      <Box my={3}>
        <Paper>
          <Tabs
            value={tabIndex}
            indicatorColor='primary'
            textColor='primary'
            onChange={(event, value) => setTabIndex(value)}
            centered>
            {tabs.map((tab) => (
              <Tab key={tab.name} label={tab.name} />
            ))}
          </Tabs>
        </Paper>
      </Box>
      <Paper>
        <Box p={2}>
          <TabComponent />
        </Box>
      </Paper>
    </>
  );
};

export default ProjectTabs;
