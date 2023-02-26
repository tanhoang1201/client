import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { FreeMode, Autoplay, Navigation } from 'swiper';
import NewItem from './NewItem';
import { New } from '../../@types';

const NewSlide = ({ data }: { data: New[] }) => {
	return (
		<Swiper
			slidesPerView={3}
			spaceBetween={30}
			loop={true}
			speed={1500}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
				// reverseDirection: true,
			}}
			navigation={true}
			freeMode={true}
			modules={[FreeMode, Autoplay, Navigation]}
			className='new-slide'
		>
			{data.map((item) => (
				<SwiperSlide key={item.blogId}>
					<NewItem data={item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default NewSlide;
