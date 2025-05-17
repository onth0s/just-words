import { useEffect, useState } from 'react';
import words from './resources/all_words.json';

function App() {
	const [numWords, setNumWords] = useState(500);
	const loadMoreWords = () => setNumWords(numWords + 1500);

	useEffect(() => {
		window.onscroll = (e) => {
			if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight * 0.75) {
				loadMoreWords();
			}
		};
	}, [loadMoreWords]);

	const offset = 10;

	

	return (
		<div className="overflow-hidden bg-black" >
			<div className="flex flex-wrap justify-center space-x-1 space-y-1"
				style={{ width: `calc(100vw + ${offset}vw)`, marginLeft: `-${offset / 2}vw` }}
			>
				{words.map((el, i) => (
					(i < numWords) && <div className="px-2 w-max border-black rounded-full" key={i}
						style={{
							color: `hsl(0, 0%, ${Math.cos(i * 0.002) * 100}%)`,
							backgroundColor: `hsl(${(i / 10) - 50}, 100%, 50%)`,
						}}
					>{el}</div>
				))}
			</div>
		</div>
	);
}

export default App;
