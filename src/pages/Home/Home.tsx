import { useQuery } from '@tanstack/react-query';
import newApi from '../../apis/new.api';
import Banner from './Banner';
import NewSlide from './NewSlide';

const Home = () => {
	const newsQuery = useQuery({
		queryKey: ['news'],
		queryFn: newApi.getNews,
	});

	const newsList = newsQuery.data?.data || [];

	return (
		<div>
			<Banner data={newsList} />
			<NewSlide data={newsList} />
		</div>
	);
};

export default Home;
