
import styles from './Search.module.scss';
import SearchIcon from '../../assets/icon-search.svg?react';
import { Button } from '../Button/Button';

interface SearchProps { 
	hasError: boolean,
	onSubmitt: (text: string) => void,
}

type FormFields = {
	username: HTMLInputElement
}
 
export const Search = ({ hasError, onSubmitt}: SearchProps) => {

	const handledSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
		event.preventDefault();
		const text = event.currentTarget.username.value;

		onSubmitt(text);
		event.currentTarget.reset();
	};
	
	return(
		<form onSubmit={handledSubmit} autoComplete='off'>
			<div className={styles.search}>
				<label htmlFor='search' className={styles.label}>
					<SearchIcon />
				</label>
				<input 
					ref={searchRef} 
					type="text" 
					className={styles.search} 
					id="search"
					name="username"
					placeholder='Search GitHub username...'></input>
				{hasError && (
					<div className={styles.error}>
						No reult
					</div>
				)}
				<Button>Search</Button>
			</div>
		</form>
	);
};