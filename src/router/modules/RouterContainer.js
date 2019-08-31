import Container from '@/views/Container';
import Contact from '@/views/Contact';

export default [
  {
    path: '/',
    name: 'Portfolio',
    component: Container,
    meta: {
      title: 'asmfadholi Portfolio',
    },
    children: [
      {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: {
          title: 'asmfadholi Contact',
        },
      },
    ],
  },
];
