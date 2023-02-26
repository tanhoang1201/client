import { Link, NavLink } from 'react-router-dom';
import images from '../../assets/images';
import { FBIcon, SkyIcon, TWIcon } from '../../icons';
const Header = () => {
	return (
		<header className='flex items-center justify-between py-5 shadow'>
			<Link to={'/'}>
				<img src={images.logo} alt='Logo' className='h-12 ' />
			</Link>
			<nav>
				<div className='flex gap-10 font-semibold'>
					<NavLink
						to={'/'}
						className={({ isActive }) =>
							`text-lg transition-all hover:text-orange-500 hover:underline ${
								isActive ? 'text-orange-500 underline' : 'text-purple-600'
							}`
						}
					>
						HOME
					</NavLink>
					<NavLink
						to={'/blogs'}
						className={({ isActive }) =>
							`text-lg transition-all hover:text-orange-500 hover:underline ${
								isActive ? 'text-orange-500 underline' : 'text-purple-600'
							}`
						}
					>
						MANAGER NEWS
					</NavLink>
				</div>
			</nav>
			<ul className='flex items-center gap-4'>
				<li className='cursor-pointer transition-all hover:text-orange-500'>
					<FBIcon />
				</li>
				<li className='cursor-pointer transition-all hover:text-orange-500'>
					<TWIcon />
				</li>
				<li className='cursor-pointer transition-all hover:text-orange-500'>
					<SkyIcon />
				</li>
			</ul>
		</header>
	);
};

export default Header;
