import React, { useState } from 'react'
import styles from '../styles/CitySelector.module.css'
import CityCard from './CityCard'

const CitySelector = () => {
  const [selectedCityName, setSelectedCityName] = useState('')

  const citiesData = [
    {
      name: 'Токио',

      description:
        'Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.',

      imageUrl:
        'https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg',

      facts: [
        'Токио - самый населенный мегаполис в мире.',

        'Здесь расположена самая высокая башня в Японии - Токийская башня.',

        'В Токио проходят множество культурных событий и фестивалей.',
      ],
    },

    {
      name: 'Киото',

      description:
        'Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.',

      imageUrl:
        'https://img.freepik.com/free-photo/red-tori-gate-fushimi-inari-shrine-temple-kyoto-japan_1232-2279.jpg?ga=GA1.1.925372115.1736766531&semt=ais_hybrid&w=740',

      facts: [
        'В Киото насчитывается более 1600 буддийских храмов.',

        'Этот город был столицей Японии более тысячи лет.',
      ],
    },

    {
      name: 'Осака',

      description:
        'Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.',

      imageUrl:
        'https://img.freepik.com/free-photo/canal-with-sailing-boat_1258-28.jpg?ga=GA1.1.925372115.1736766531&semt=ais_hybrid&w=740',

      facts: [
        'Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.',

        'Город является кулинарной столицей Японии.',
      ],
    },

    {
      name: 'Хоккайдо',

      description:
        'Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.',

      imageUrl:
        'https://img.freepik.com/free-photo/cherry-blossoms-spring-chureito-pagoda-fuji-mountain-sunset-japan_335224-215.jpg?ga=GA1.1.925372115.1736766531&semt=ais_hybrid&w=740',

      facts: [
        'Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.',

        'Летом остров привлекает туристов своими цветущими лавандовыми полями.',
      ],
    },

    {
      name: 'Нагоя',

      description:
        'Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.',

      imageUrl:
        'https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg',

      facts: [
        'Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.',

        'Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.',
      ],
    },
  ]
  const changeCity = (event) => {
    setSelectedCityName(event.target.value)
  }
  const selectedCity = citiesData.find((city) => city.name === selectedCityName)
  console.log(selectedCity)

  return (
    <div className={styles.citySelector}>
      <h2 style={{marginTop: '20px'}}>Выберите город:</h2>
      <select className={styles.select} value={selectedCityName} onChange={changeCity}>
        {citiesData.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      {selectedCity && (
        <CityCard
          key={selectedCity.id}
          city={selectedCity.name}
          imgCity={selectedCity.imageUrl}
          description={selectedCity.description}
          facts={selectedCity.facts}
        />
      )}
    </div>
  )
}

export default CitySelector
