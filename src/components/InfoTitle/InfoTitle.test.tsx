import { render } from 'react-dom';
import { InfoTitle } from './InfoTitle';
{/* 
// @ts-expect-error */}
describe(InfoTitle, () => {
	test('it should mount', () => {
		render(InfoTitle);
    
		const box = screen.getByTestId(InfoTitle);

		expect(box).toBeInTheDocument();
	});
});