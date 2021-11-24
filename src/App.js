import Dictionary from './modules/Dictionary';
import Footer from './modules/Footer';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<header className='header'>
				<h1 className='h1'>What word do you want to look up?</h1>
			</header>
			<Dictionary defaultKeyword='cat' />
			<Footer />
		</div>
	);
}

export default App;
