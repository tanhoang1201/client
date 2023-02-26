import { New } from '../../@types';

interface IProps {}

const NewItem = ({ data }: { data: New }) => {
	return (
		<div className='flex h-full flex-col overflow-hidden rounded shadow transition-all hover:-translate-y-px'>
			<div
				className='bg-cover bg-center bg-no-repeat pt-[50%]'
				style={{
					backgroundImage: `url(${data.imageUrl})`,
				}}
			></div>
			<div className='flex flex-1 select-none flex-col p-2 '>
				<h3 className='text-lg font-semibold line-clamp-2'>{data.title}</h3>
				<p className='mb-4 text-sm line-clamp-3'>{data.content}</p>
				<div className='mt-auto flex items-end justify-between'>
					<button className='rounded bg-blue-500 px-2 py-1 uppercase text-white'>Read</button>
					<span className='mr-4 text-slate-500'>Author: {data.author}</span>
				</div>
			</div>
		</div>
	);
};

export default NewItem;
