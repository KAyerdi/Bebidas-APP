import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FavoritesPage from './views/FavoritesPage'
import IndexPage from './views/IndexPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage/>} />
        <Route path='/favoritos' element={<FavoritesPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
