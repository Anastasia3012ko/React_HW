import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import ArticlesList from './ArticlesList'
import Article from './Article'

const MyRouters = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='articlesList' element={<ArticlesList/>}/>
            <Route path='article' element={<Article/>}/>
        </Routes>

    </div>
  )
}

export default MyRouters