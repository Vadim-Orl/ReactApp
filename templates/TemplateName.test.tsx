import { render } from 'react-dom';
import { TemplateName } from './TemplateName';
{/* 
// @ts-expect-error */}
describe(TemplateName, () => {
	test('it should mount', () => {
		render(TemplateName);
    
		const box = screen.getByTestId(TemplateName);

		expect(box).toBeInTheDocument();
	});
});