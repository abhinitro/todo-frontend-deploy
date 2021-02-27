
import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));

const Home = React.lazy(() => import('./views/Home'));
const TodoCreate= React.lazy(() => import('./views/Todo/Create'));

const TodoUpdate= React.lazy(() => import('./views/Todo/Edit'));

const routes = [

  { path: '/dashboard', exact: true, name: 'Dashboard' ,component: Dashboard  },

  { path: '/todo/create', exact: true, name: 'Create' ,component:TodoCreate   },

 
  { path: '/todo/update/:id', exact: true, name: 'TodoUpdate' ,component:TodoUpdate   },
 
];


export default routes;
