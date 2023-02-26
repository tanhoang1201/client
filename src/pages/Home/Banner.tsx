import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import BannerItem from './BannerItem';
import { New } from '../../@types';

interface IProps {
	data: New[];
}

const Banner = ({ data }: IProps) => {
	return (
		<Swiper
			spaceBetween={30}
			centeredSlides={true}
			effect='fade'
			loop={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			pagination={{
				dynamicBullets: true,
			}}
			modules={[Autoplay, Pagination, Navigation, EffectFade]}
			className='mySwiper'
		>
			{data.map((item) => (
				<SwiperSlide key={item.blogId}>
					<BannerItem data={item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Banner;
