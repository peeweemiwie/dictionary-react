import './App.scss';
import Dictionary from './modules/Dictionary';

function App() {
	return (
		<div className='App'>
			<header className='header'>
				<h1 className='h1'>Dictionary App</h1>
			</header>
			<Dictionary />
			<footer>this is a footer</footer>
		</div>
	);
}

export default App;
