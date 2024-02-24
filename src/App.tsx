import { UserCard } from './components/UserCard/UserCard';
import { Container } from './components/Container/Container';
import { Search } from './components/Search/Search';
import { TheHeader } from './components/TheHeader/TheHeader';
import { defaultUser } from './mock';

function App() {
	return (
		<Container>
			<TheHeader />
			<Search hasError onSubmitt={()=>{}}/>
			<UserCard {...defaultUser}/>
		</Container>
	);
}

export default App;
