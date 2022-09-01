import Home from '@pages/Home'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RequireAuth from './middlewares/middleware'
import Grid from '@app/components/Layouts'
const AppRoutes: React.FC = () => {
  return (
    <Grid>
      <Routes>
        <Route path="/" element={<RequireAuth Element={Home} />} />
      </Routes>
    </Grid>
  )
}

export default AppRoutes
