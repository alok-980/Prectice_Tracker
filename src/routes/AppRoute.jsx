import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import DashboardLayout from '../layout/DashboardLayout'
import Dashboard from '../features/dashboard/ui/pages/Dashboard'
import Question from '../features/questions/ui/pages/Question'
import Progress from '../features/progress/ui/pages/Progress'
import QuestionPage from '../features/questions/ui/components/QuestionPage'
import QuestionForm from '../features/questions/ui/components/QuestionForm'
import QuestionUpdateForm from '../features/questions/ui/components/QuestionUpdateForm'

const AppRoute = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                {
                    index: true,
                    element: <Dashboard />
                },
                {
                    path: 'dashboard',
                    element: <Dashboard />
                },
                {
                    path: 'question',
                    element: <Question />,
                    children: [
                        {
                            path: '',
                            element: <QuestionPage />
                        },
                        {
                            path: 'add',
                            element: <QuestionForm />
                        },
                        {
                            path: 'update/:id',
                            element: <QuestionUpdateForm />
                        }
                    ]
                },
                {
                    path: 'progress',
                    element: <Progress />
                }
            ]
        }
    ])

  return <RouterProvider router={router} />
}

export default AppRoute