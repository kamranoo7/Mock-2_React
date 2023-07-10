import React from 'react'
import Quiz from './quiz'
import Form from './Form'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form/>}></Route>
        <Route path="quiz" element={<Quiz/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
