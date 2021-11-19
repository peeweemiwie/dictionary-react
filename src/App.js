import './App.scss';
import Dictionary from './modules/Dictionary';
import Footer from './modules/Footer';
function App() {
	return (
		<div className='App'>
			<header className='header'>
				<h1 className='h1'>Dictionary App</h1>
			</header>
			<Dictionary defaultKeyword='cat' />
			<Footer />
		</div>
	);
}

export default App;
