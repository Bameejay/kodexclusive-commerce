import { TbSend2 } from "react-icons/tb";
import { ImFacebook } from "react-icons/im";
import { TbBrandTwitter } from "react-icons/tb";
import { CgInstagram } from "react-icons/cg";
import { RiLinkedinLine } from "react-icons/ri";
import barCode from '../assets/images/Qr Code.png'
import appStore from '../assets/images/appstore.png'
import playStore from '../assets/images/playstore.png'


const Footer = () => {
    return (
		<div className="bg-black divide-y divide-gray-600">
        <footer className=" container mx-auto py-4 px-0 text-white dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="space-y-6 ">
			<span className="self-center text-lg font-semibold">Exclusive</span>
			<h3 className="text-sm">Subscribe</h3>
			<p className="font-normal text-sm">Get 10% off your first order</p>
			<div className="relative">
				<input type="text" placeholder="Enter your email" className="border bg-black text-xs p-2" />
				<TbSend2 className="absolute top-2 left-32" />
			</div>
		</div>
			<div className="space-y-6">
				<h3 className="tracking-wide uppercase dark:text-gray-900">Support</h3>
				<p>111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</p>
				<p>exclusive@gmail.com</p>
				<p>+88015-88888-9999</p>
			</div>
			<div className="space-y-6">
				<h3 className="tracking-wide uppercase dark:text-gray-900">Account</h3>
				<ul className="space-y-4">
					<li>
						<a rel="noopener noreferrer" href="#">My Account</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Login/Register</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Cart</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Wishlist</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Shop</a>
					</li>
				</ul>
			</div>
			<div className="space-y-6">
				<h3 className="uppercase dark:text-gray-900">Quick Link</h3>
				<ul className="space-y-4">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy Policy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms Of Use</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Contact</a>
					</li>
				</ul>
			</div>
			<div className="space-y-6">
				<h3 className="uppercase dark:text-gray-900">Download App</h3>
				<p className="text-sm">Save $3 with App New User Only</p>
				<div className="flex gap-4">
					<img src={barCode} alt="Qr_code" />
					<div className="space-y-2">
						<img src={playStore} alt="play_store" />
						<img src={appStore} alt="app_store" />
					</div>
				</div>
				<div>
					<ul className="flex space-x-10">
						<li>
							<a href=""><ImFacebook /></a>
						</li>
						<li>
							<a href=""><TbBrandTwitter /></a>
						</li>
						<li>
							<a href=""><CgInstagram /></a>
						</li>
						<li>
							<a href=""><RiLinkedinLine /></a>
						</li>
					</ul>
				</div>
			</div>
		{/* </div> */}
	</div>
</footer>
<div className="py-6 text-sm text-center text-white dark:text-gray-600">© 2024 Jaycodes build. All rights reserved.</div>
</div>
     );
}
 
export default Footer;