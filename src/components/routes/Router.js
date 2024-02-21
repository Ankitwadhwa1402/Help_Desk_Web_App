import React from 'react'
import { useRoutes } from 'react-router-dom';
import HomePage from '../../sections/home/HomePage';
import FacebookLinking from '../Facebook/FacebookLinking';
import MessageScreen from '../../sections/messageScreen/MessageScreen';

export default function Router() {
  const route = useRoutes([
    {
      path:'/',
      element:<HomePage />
    },
    {
      path:'/facebook-link',
      element:<FacebookLinking />
    },
    {
      path:'/messages',
      element:<MessageScreen />
    }

  ])
  return route;
}
