import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/ArticlesListe.module.css'

const articles = [
  { id: '1', title: 'Labrador' },
  { id: '2', title: 'Border Collie' },
  { id: '3', title: 'Corgi' },
  { id: '4', title: 'French Bulldog' },
  { id: '5', title: 'German shepherd' },

];

const ArticlesList = () => {
  return (
    <div className={styles.articles}>
      <h3 className={styles.header}>About dogs:</h3>
      <ul className={styles.list}>
        {articles.map(article =>(
            <li key={article.id}>
                <Link to={`/articlesList/${article.id}`}>{article.title}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ArticlesList
