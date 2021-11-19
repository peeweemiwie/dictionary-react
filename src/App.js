import './App.scss';
import Dictionary from './modules/Dictionary';

function App() {
	return (
		<div className='App'>
			<header className='header'>
				<h1 className='h1'>Dictionary App</h1>
			</header>
			<Dictionary />
			<footer>
				Coded by{' '}
				<a
					href='https://miwayagi.com/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Miwa Kaur
				</a>
				. View{' '}
				<a
					href='https://github.com/peeweemiwie/dictionary-react'
					target='_blank'
					rel='noopener noreferrer'
				>
					GitHub
				</a>{' '}
			</footer>
		</div>
	);
}

export default App;
