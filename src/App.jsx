import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About'
import News from './pages/News'
import NoPage from './pages/NoPage';
function App() {
	const myrouter = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			errorElement: <NoPage />,

		},
		{
			path: 'about',
			element: <About />
		},
		{
			path: 'news',
			element: <News />
		}
	])
	return (
		<div className='container'>
			<RouterProvider router={myrouter} />
		</div>
	)
}

export default App
