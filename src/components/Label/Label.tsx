import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	id?: string;
}

const Label = ({ children, id }: IProps) => {
	return (
		<label htmlFor={id} className='mb-1 font-semibold text-blue-500'>
			{children}
		</label>
	);
};

export default Label;
