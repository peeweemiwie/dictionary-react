import axios from 'axios';
const RequestDictionary = ({ func, keyword }) => {
	// documentation: https://dictionaryapi.dev/
	console.log(func, keyword);
	const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
	axios.get(apiUrl).then(func);
};

export default RequestDictionary;
