import { DayValue } from '@hassanmojab/react-modern-calendar-datepicker';
import { UserRo } from './auth';

export enum CategoryEnum {
  COMPUTER = 'COMPUTER',
  PHYSICS = 'PHYSICS',
  CHEMISTRY = 'CHEMISTRY',
  MATHEMATICS = 'MATHEMATICS',
}

export interface BudgetDto {
  title: string;
  value: number;
}

export interface TechnicalDescriptionDto {
  name: string;
  value: string;
}

export interface TimelineDto {
  name: string;
  date: DayValue | string;
}

export interface ProjectDto {
  subject: string;
  institution: string;
  category: CategoryEnum;
  summary: string;
  budgets: BudgetDto[];
  budgetReason: string;
  projectFirstIdea: string;
  projectMainIdea: string;
  projectGoal: string;
  technicalDescriptions: TechnicalDescriptionDto[];
  projectAdditionalInfo: string;
  timeDescription: string;
  timelines: TimelineDto[];
  imageUrls: string[];
}

export interface ProjectRo {
  id: string;
  subject: string;
  institution: string;
  category: CategoryEnum;
  summary: string;
  budgets: BudgetDto[];
  budgetReason: string;
  projectFirstIdea: string;
  projectMainIdea: string;
  projectGoal: string;
  technicalDescriptions: TechnicalDescriptionDto[];
  projectAdditionalInfo: string;
  timeDescription: string;
  timelines: TimelineDto[];
  imageUrls: string[];
  state: boolean;
  owner: UserRo;
  //   rewards: RewardRo[];
}
