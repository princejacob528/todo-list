import React from 'react'
import Todo from './components/Todo'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-stone-900 grid h-screen'>
      <Header />
      <Todo />
      <Footer />
    </div>
  )
}

export default App
