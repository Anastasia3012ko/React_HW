import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from '../styles/Article.module.css'
import Labrador from '../components/assets/labrador.jpg'
import BorderCollie from '../components/assets/BorderCollie.jpg'
import Corgi from '../components/assets/corgi.jpg'
import Bulldog from '../components/assets/french-bulldog.jpg'
import Shepherd from '../components/assets/german-shepherd.webp'



const articles = [
  { id: '1', title: 'Labrador', img: Labrador, text: 'Labradors are friendly, intelligent, and highly trainable dogs, making them one of the most popular breeds worldwide. They are known for their gentle nature and strong bond with families, especially children. Originally bred as hunting and retrieving dogs, they are also commonly used as service and therapy animals.' },
  { id: '2', title: 'Border Collie', img: BorderCollie, text: 'Border Collies are highly intelligent, energetic dogs originally bred for herding sheep. They are known for their agility, focus, and eagerness to work, making them excellent in dog sports and obedience training. Loyal and responsive, they thrive in active homes where they get plenty of mental and physical stimulation.' },
  { id: '3', title: 'Corgi', img: Corgi, text: 'Corgis are small, energetic dogs known for their short legs, long bodies, and big personalities. They are intelligent and affectionate, making them great companions for families. Originally bred for herding, Corgis are also alert and make good watchdogs.' },
  { id: '4', title: 'French Bulldog', img: Bulldog, text: 'French Bulldogs are small, muscular dogs with a distinctive flat face and bat-like ears. They are affectionate, playful, and adapt well to apartment living. Despite their laid-back nature, they enjoy short play sessions and being close to their owners.' },
  { id: '5', title: 'German shepherd', img: Shepherd, text: 'German Shepherds are strong, intelligent, and loyal dogs originally bred for herding and guarding. They excel in police, military, and service work due to their trainability and protective nature. With proper training and socialization, they make excellent family companions and guardians.' }

];

const Article = () => {
    const { id }= useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const article = articles.find(article => article.id === id)
    
  return (
    <div className={styles.article}>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.text}>{article.text}</p>
        <img className={styles.img} src={article.img} alt="dogs picture" />
        <p>We are here now: {location.pathname}</p>
        <button onClick={()=> navigate('/articlesList')}>Back to list</button>

    </div>
  )
}

export default Article