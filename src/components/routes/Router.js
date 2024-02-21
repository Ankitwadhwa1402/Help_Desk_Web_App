import React from 'react'
import { useRoutes } from 'react-router-dom';
import HomePage from '../../sections/home/HomePage';
import FacebookLinking from '../Facebook/FacebookLinking';

export default function Router() {
  const route = useRoutes([
    {
      path:'',
      element:<HomePage />
    },
    {
      path:'/login',
      element:<FacebookLinking />
    }
  ])
  return route;
}
