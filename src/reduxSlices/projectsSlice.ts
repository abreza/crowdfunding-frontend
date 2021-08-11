import { VideoPlayer } from './../components/atoms/VideoPlayer';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [
    {
      id: 0,
      image: 'https://www.robotlab.com/hubfs/Makerbot%20Replicator+%203D-1.png',
      name: 'پرینتر ۳ بعدی',
      subtitle:
        'کیفیتی فوق‌العاده و طراحی بسیار دقیق جزئیات! سرعت بالای این محصول، امکان استفاده صنعتی از آن را فراهم کرده است.',
      description:
        'کیفیتی فوق‌العاده و طراحی بسیار دقیق جزئیات! سرعت بالای این محصول، امکان استفاده صنعتی از آن را فراهم کرده است.',
      gallery: [
        {
          original:
            'https://www.robotlab.com/hubfs/Makerbot%20Replicator+%203D-1.png',
          thumbnail:
            'https://www.robotlab.com/hubfs/Makerbot%20Replicator+%203D-1.png',
        },
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ],
    },
    {
      id: 1,
      image: process.env.PUBLIC_URL + 'wss.jpg',
      name: 'رویداد WSS',
      subtitle:
        'رویداد WSS امسال سعی دارد بستری هرچه موثرتر را برای ایجاد ارتباط فراهم نماید.',
      description: `چهارمین دوره از سمینار زمستانه مباحث پیشرفته در علوم و مهندسی کامپیوتر (WSS) امسال در تاریخ ۵ و ۶ دی‌ماه مطابق با روال همیشه در دانشگاه صنعتی شریف برگزار می‌گردد.
      در این سمینار با ارائه‌ی سخنرانی‌های علمی-تخصصی توسط مدعوینی خبره از سراسر دنیا، آخرين دستاوردهای علمی در زمينه‌های مختلف علوم و مهندسی کامپیوتر در قالب یک سمینار دو روزه ارائه می‌گردد. اطلاعات تکمیلی من جمله برنامه‌ی زمانی رویداد و جزئیات سمینارها را می‌توانید از سایت سمینار زمستانه کسب کنید. هم‌چنین اطلاع‌رسانی رویداد از طریق کانال تلگرامی رویداد خواهد بود.
      از كليه دانشجویان، پژوهشگران و متخصصان دانشگاه‌ها و مؤسسات تحقيقاتی در رشته‌های مرتبط با محورهای سمینار، دعوت می‌شود تا از تاریخ ۱۷ آذرماه تا ۱ دی‌ماه از طریق صفحه‌ی سمینار نسبت به ثبت‌نام اقدام نمایند. با توجه به ظرفیت محدود سمینار، اولویت با افرادی است که زود‌تر ثبت‌نام کنند.`,
      gallery: [
        {
          original: process.env.PUBLIC_URL + 'wss.jpg',
          thumbnail: process.env.PUBLIC_URL + 'wss.jpg',
          videoUrl:
            'https://video-5-ir-1.dalfak.com/67/672275766-904988928.mp4',
          renderItem: VideoPlayer,
        },
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ],
    },
  ],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const { reducer: projectsReducer } = projectsSlice;
