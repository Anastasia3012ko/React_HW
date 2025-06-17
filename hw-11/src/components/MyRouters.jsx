import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ArticlesList from '../pages/ArticlesList'
import Article from '../pages/Article'

const MyRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articlesList" element={<ArticlesList />} />
        <Route path="/articlesList/:id" element={<Article />} />
      </Routes>
    </div>
  )
}

export default MyRouters
