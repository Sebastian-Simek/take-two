import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Search  from '../components/Search/Search';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="search" element={<Search />} />
      </Routes>
    </Router>
  )
}
