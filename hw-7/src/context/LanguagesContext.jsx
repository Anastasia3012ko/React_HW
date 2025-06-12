import React, { createContext, useState } from 'react'
export const LanguageContext = createContext()

const LanguagesContext = ({ children }) => {
  const [language, setLanguage] = useState('en')
  const changeLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en')
  }

  return (
    <LanguageContext.Provider value={{language, changeLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguagesContext
