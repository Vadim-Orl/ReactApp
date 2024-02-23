import styles from './TheHeader.module.scss';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

export const TheHeader = () => (
	<div className={styles.header}>
		<div className={styles.logo}>
      definder
		</div>
		<ThemeSwitcher />
	</div>
);
