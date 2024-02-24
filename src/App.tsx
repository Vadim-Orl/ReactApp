import { Container } from './components/Container/Container';
import { Search } from './components/Search/Search';
import { TheHeader } from './components/TheHeader/TheHeader';

function App() {
	return (
		<Container>
			<TheHeader />
			<Search hasError onSubmitt={()=>{}}/>
		</Container>
	);
}

export default App;
