import { CategoryEnum, ProjectRo, ProjectState } from 'types/project';

export const fakeData = {
  name: 'root',
  children: [
    {
      name: 'سعید محمدی',
      value: 84,
    },
    {
      name: 'علی احتشامی',
      value: 39,
    },
    {
      name: 'مرتضی ابوالقاسمی',
      value: 90,
    },
    {
      name: 'مخفی',
      value: 26,
    },
    {
      name: 'محمد محمدی',
      value: 67,
    },
    {
      name: 'شرکت کافه بازار',
      value: 400,
    },
  ],
};

export const fakeProject: ProjectRo = {
  id: '123',
  subject: 'تستی',
  institution: 'دانشگاه شریف',
  category: CategoryEnum.CHEMISTRY,
  summary: 'این فعالیت جهت تست است.',
  budgets: [
    {
      title: 'تست کردن',
      value: 10000000,
    },
    {
      title: 'مطمئن شدن از تست',
      value: 2000,
    },
  ],
  budgetReason: 'باعث تست بهتر می‌شود',
  projectFirstIdea: 'تست کردن سامانه',
  projectMainIdea: 'مطمئن شدن از کارایی سامانه',
  projectGoal: 'تست کردن سامانه',
  technicalDescriptions: [
    {
      name: 'سرعت',
      value: 'خوب',
    },
    {
      name: 'دقت',
      value: 'خوب',
    },
    {
      name: 'کیفیت',
      value: 'عالی',
    },
  ],
  projectAdditionalInfo: 'ندارد',
  timeDescription: 'چند روز زمان لازم داریم.',
  timelines: [
    {
      name: 'تکمیل تست',
      date: '2021-09-18T19:30:00.000Z',
    },
    {
      name: 'مطمئن شدن از تست',
      date: '2021-09-21T20:30:00.000Z',
    },
  ],
  imageUrls: [
    'https://crowdfunding.mamalan.ir/api/v1/media/image/da1faf97a31462c088a601fad83d7681.jpg',
    'https://crowdfunding.mamalan.ir/api/v1/media/image/c27f45bcab90682227044a14e0bfaf0c.png',
  ],
  state: ProjectState.START,
  owner: {
    email: '',
    firstName: 'Morteza',
    lastName: 'Abolghasemi',
    roles: [],
  },
};
