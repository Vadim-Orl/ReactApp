import { render } from 'react-dom';
import { Button } from './Button';
{/* 
// @ts-expect-error */}
describe(Button, () => {
	test('it should mount', () => {
		render(Button);
    
		const box = screen.getByTestId(Button);

		expect(box).toBeInTheDocument();
	});
});