
import React, { useRef } from 'react';
import styles from './Search.module.scss';
import SearchIcon from '../../assets/icon-search.svg?react';
import { Button } from '../Button/Button';

interface SearchProps { 
	hasError: boolean,
	onSubmitt: (text: string) => void,
}

export const Search = ({ hasError, onSubmitt}: SearchProps) => {
	const searchRef = useRef<HTMLInputElement | null >(null);

	const handledSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		const text = searchRef.current ? searchRef.current.value : '';
		// const a:never;

		if (text) {
			onSubmitt(text);
			searchRef.current && (searchRef.current.value = '');
		}
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