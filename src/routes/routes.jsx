import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import WeatherApp from '../App'
import FAQ from '../faqs'
import TodoApp from '../pages/TodoApp'

const routes = createBrowserRouter([
    {path:"",
     element: <WeatherApp />,
    },
     {path:"/faqs",
     element: <FAQ />,
    },
       {path:"/todo",
     element: <TodoApp />,
    },

])
export default routes
