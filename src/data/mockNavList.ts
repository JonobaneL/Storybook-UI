export const NAV_LIST = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Services',
    link: '/services',
    subItems: [
      {
        label: 'Service 1',
        link: '/services/service-1',
      },
      {
        label: 'Service 2',
        link: '/services/service-2',
        subItems: [
          {
            label: 'Service 1',
            link: '/services/service-1',
          },
          {
            label: 'Service 2',
            link: '/services/service-2',
          },
        ],
      },
    ],
  },
  {
    label: 'Contact',
    link: '/contact',
  },
];
