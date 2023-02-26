import { forwardRef, InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, IProps>(({ ...rest }, ref) => {
	return (
		<div>
			<input
				ref={ref}
				className='w-full rounded border p-2 outline-none transition-all focus:border-blue-500'
				{...rest}
				required
			/>
		</div>
	);
});

export default Input;
