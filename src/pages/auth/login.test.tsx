import {render} from '@testing-library/react';
import Login from './login';

test('can display login page', () => {
    const {container} = render(<Login/>);
    const text = container.querySelector('.header');
    expect(text?.innerHTML).toBe('Login');
});