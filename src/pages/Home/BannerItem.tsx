import { New } from '../../@types';

const BannerItem = ({ data }: { data: New }) => {
	return (
		<div
			className='relative rounded-md bg-cover bg-center bg-no-repeat pt-[50%]'
			style={{
				backgroundImage: `url(${data.imageUrl})`,
			}}
		>
			<div className='absolute left-16 bottom-16 right-16 text-white'>
				<h2 className='text-shadow mb-4 truncate text-5xl font-bold shadow-black drop-shadow-2xl'>
					{data.title}
				</h2>
				<p className='text-shadow truncate text-xl'>{data.content}</p>
			</div>
		</div>
	);
};

export default BannerItem;
