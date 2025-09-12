import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import WeatherApp from '../App'
import FAQ from '../faqs'

const routes = createBrowserRouter([
    {path:"",
     element: <WeatherApp />,
    },
     {path:"/faqs",
     element: <FAQ />,
    },

])
export default routes
