import RootLayout from "@/pages/RootLayout";
import HomePage from "@/pages/HomePage";
import Spring from "@/components/Spring";
import Summer from "@/components/Summer";
import Autumn from "@/components/Autumn";
import Winter from "@/components/Winter";
import Universe from "@/components/Universe";

import { createBrowserRouter } from "react-router-dom";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'spring', element: <Spring /> },
      { path: 'summer', element: <Summer /> },
      { path: 'autumn', element: <Autumn /> },
      { path: 'winter', element: <Winter /> },
      { path: 'universe', element: <Universe /> }
    ]
  }
])