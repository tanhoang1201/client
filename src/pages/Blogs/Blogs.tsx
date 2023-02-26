import { useMutation, useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import newApi from '../../apis/new.api';

const Blogs = () => {
	const navigate = useNavigate();
	const newsQuery = useQuery({
		queryKey: ['news'],
		queryFn: newApi.getNews,
	});

	const deleteMutate = useMutation({
		mutationFn: (id: string) => newApi.deleteNew(id),
	});

	const handleDeleteNew = (id: string) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				deleteMutate.mutate(id, {
					onSuccess: () => {
						newsQuery.refetch();
						Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
					},
				});
			}
		});
	};

	const newsList = newsQuery.data?.data || [];
	return (
		<div className='container mt-8'>
			<div className=' mb-3 grid grid-cols-12 rounded-sm bg-white py-[18px] px-10 shadow'>
				<div className='col-span-7 text-center'>
					<span className='text-lg font-semibold text-[#888888]'>New</span>
				</div>
				<Link to={'/form'} className='col-span-2 rounded-md bg-blue-500 p-1 text-center text-white'>
					Create New
				</Link>
				<div className='col-span-3 text-center '>
					<span className='text-lg font-semibold text-[#888888]'>Action</span>
				</div>
			</div>
			<div className='mb-3 rounded-sm bg-white p-5 shadow'>
				<div className='border px-5'>
					{newsList.map((item, index) => (
						<div
							className={`grid grid-cols-12 ${index < newsList.length - 1 ? 'border-b' : ''}`}
							key={item.blogId}
						>
							<div className='col-span-7 flex py-4'>
								<div className='mr-[10px] flex-shrink-0'>
									<img src={item.imageUrl} alt='Product-img' className='h-20 w-20 object-cover' />
								</div>
								<div className='flex flex-col justify-between'>
									<h3 className='max-w-[500px] text-sm font-semibold line-clamp-2'>{item.title}</h3>
									<span>
										Author: <span className='text-purple-500'>{item.author}</span>
									</span>
								</div>
							</div>
							<div className='col-span-2'></div>
							<div className='col-span-3 flex items-center justify-center gap-6'>
								<button
									className='hover:text-primary rounded border border-red-500 p-1 text-red-500 transition-colors'
									onClick={() => handleDeleteNew(item.blogId)}
								>
									Delete
								</button>
								<button
									onClick={() => {
										navigate(`/form?id=${item.blogId}`);
									}}
									className='hover:text-primary rounded border border-blue-500 p-1 text-blue-500 transition-colors'
								>
									Edit
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Blogs;
