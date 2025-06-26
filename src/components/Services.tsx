import React, { useState, useEffect, useRef } from 'react';
import { Building2, Cog, Ruler, Shield, Activity, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Define main service categories with sub-services
const serviceCategories = [
	{
		title: 'Architectural',
		icon: <Ruler className="w-8 h-8" />,
		description: 'Comprehensive architectural solutions from concept to completion',
		subServices: [
			{
				title: 'Architectural Consultancy',
				description: 'Expert advice on design and implementation strategies',
			},
			{
				title: 'Interior Design',
				description: 'Functional and aesthetic interior space planning',
			},
			{
				title: 'Furniture Design',
				description: 'Custom furniture solutions tailored to your needs',
			},
			{
				title: 'Acoustic & Lighting',
				description: 'Optimized sound and lighting environments',
			},
			{
				title: 'Master Planning',
				description: 'Strategic urban and site development planning',
			},
		],
	},
	{
		title: 'Engineering',
		icon: <Building2 className="w-8 h-8" />,
		description: 'Structural and technical engineering expertise for all project types',
		subServices: [
			{
				title: 'Structural Consultancy',
				description: 'Comprehensive structural analysis and design',
			},
			{
				title: 'MEP Engineering',
				description: 'Mechanical, electrical and plumbing solutions',
			},
			{
				title: 'HVAC Solutions',
				description: 'Climate control systems for optimal comfort',
			},
			{
				title: 'ELV Services',
				description: 'Extra-low voltage systems for modern buildings',
			},
			{
				title: 'Material Consultancy',
				description: 'Guidance on optimal material selection',
			},
		],
	},
	{
		title: 'Technical',
		icon: <Cog className="w-8 h-8" />,
		description: 'Advanced technical services using cutting-edge technology',
		subServices: [
			{
				title: 'Laboratory Testing',
				description: 'Rigorous material and structural testing',
			},
			{
				title: 'Land Surveying & GIS',
				description: 'Precise mapping and geographical data analysis',
			},
			{
				title: 'BIM Services',
				description: 'Building Information Modeling for better project coordination',
			},
			{
				title: 'Software Training',
				description: 'Professional training on industry-standard software',
			},
			{
				title: 'Import & Export',
				description: 'Material procurement and logistics solutions',
			},
		],
	},
	{
		title: 'Project Management',
		icon: <Shield className="w-8 h-8" />,
		description: 'End-to-end project management for seamless execution',
		subServices: [
			{
				title: 'Construction Services',
				description: 'Supervision and execution of construction projects',
			},
			{
				title: 'Project Management',
				description: 'Comprehensive oversight from planning to delivery',
			},
			{
				title: 'Quantity Surveying',
				description: 'Accurate cost estimation and quantity analysis',
			},
			{
				title: 'Construction Claims',
				description: 'Expert resolution of construction-related claims',
			},
			{
				title: 'Tendering & Procurement',
				description: 'Strategic sourcing and contractor selection',
			},
		],
	},
	{
		title: 'Specialized Services',
		icon: <Activity className="w-8 h-8" />,
		description: 'Specialized solutions for unique project requirements',
		subServices: [
			{
				title: 'Sustainability Design',
				description: 'Eco-friendly design solutions for modern buildings',
			},
			{
				title: 'Historic Preservation',
				description: 'Careful restoration of historical structures',
			},
			{
				title: 'Feasibility Studies',
				description: 'Comprehensive analysis of project viability',
			},
			{
				title: 'Risk Assessment',
				description: 'Identification and mitigation of project risks',
			},
			{
				title: 'Virtual Reality Design',
				description: 'Immersive visualization of architectural concepts',
			},
		],
	},
];

const Services = () => {
	// Initialize with first service (index 0) selected instead of null
	const [activeService, setActiveService] = useState<number>(0);
	const [animated, setAnimated] = useState({
		header: false,
		serviceCategories: false,
	});

	const headerRef = useRef<HTMLDivElement>(null);
	const categoriesRef = useRef<HTMLDivElement>(null);

	// Intersection observer for animations
	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.2,
		};

		const animateElement = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;

				if (entry.target === headerRef.current) {
					setAnimated((prev) => ({ ...prev, header: true }));
				} else if (entry.target === categoriesRef.current) {
					setAnimated((prev) => ({ ...prev, serviceCategories: true }));
				}

				observer.unobserve(entry.target);
			});
		};

		const observer = new IntersectionObserver(animateElement, observerOptions);

		if (headerRef.current) observer.observe(headerRef.current);
		if (categoriesRef.current) observer.observe(categoriesRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<section id="services" className="py-20 bg-background overflow-hidden">
			<div className="container mx-auto px-4">
				{/* Header section */}
				<div className="relative mb-20">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div
							ref={headerRef}
							className={`transform transition-all duration-700 ${
								animated.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
							}`}
						>
							{/* WHAT WE OFFER section */}
							<div className="relative mb-6">
								<div className="relative inline-block py-3 px-6 bg-black/20 border-l-4 border-white/50 rounded-r-lg">
									<h5 className="text-white font-extrabold text-lg tracking-widest">
										WHAT WE OFFER
									</h5>
								</div>
							</div>

							<h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
								Engineering Excellence <br />
								<span className="text-white">for Every Project</span>
							</h2>

							<div className="relative h-1.5 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
							</div>

							<p className="text-lg text-white mb-8 relative">
								<span className="relative">
									Our multidisciplinary approach combines technical expertise with innovative solutions
									to overcome complex engineering challenges across all industries.
								</span>
							</p>

							<Button
								variant="outline"
								className="group border-white text-white hover:bg-white/10"
							>
								Contact our team
								<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
							</Button>
						</div>

						{/* Image with decorative frame */}
						<div className="relative h-96 md:h-[26rem] overflow-visible transform transition-all duration-700 delay-300">
							{/* Decorative outer frame */}
							<div
								className="absolute inset-0 -m-3 rounded-lg border border-primary/30 transform transition-all duration-1000"
								style={{
									opacity: animated.header ? 0.7 : 0,
									transform: animated.header ? 'translateY(0) scale(1.03)' : 'translateY(40px) scale(1)',
									transitionDelay: '350ms'
								}}
							></div>

							{/* Decorative corners */}
							<div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary opacity-0 transition-opacity duration-1000"
								style={{ opacity: animated.header ? 0.8 : 0, transitionDelay: '450ms' }}></div>
							<div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 transition-opacity duration-1000"
								style={{ opacity: animated.header ? 0.8 : 0, transitionDelay: '550ms' }}></div>
							<div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary opacity-0 transition-opacity duration-1000"
								style={{ opacity: animated.header ? 0.8 : 0, transitionDelay: '650ms' }}></div>
							<div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary opacity-0 transition-opacity duration-1000"
								style={{ opacity: animated.header ? 0.8 : 0, transitionDelay: '750ms' }}></div>

							{/* Main image container */}
							<div className="relative h-full overflow-hidden rounded-lg shadow-xl transform transition-all duration-700 z-10">
								<div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
								{/* Additional inner frame */}
								<div className="absolute inset-0 border-[3px] border-black/20 z-20 pointer-events-none rounded-lg"></div>
								<img
									src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
									alt="Engineering services"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Main service categories */}
				<div
					ref={categoriesRef}
					className={`transform transition-all duration-700 ${
						animated.serviceCategories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					{/* Service tabs row - updated to have equal size boxes */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
						{serviceCategories.map((category, index) => (
							<div
								key={index}
								className={`relative px-4 py-6 rounded-lg cursor-pointer transition-all duration-300 text-center flex flex-col items-center ${
									activeService === index
										? 'bg-primary/20 border border-primary/50'
										: 'hover:bg-white/5 border border-transparent'
								}`}
								style={{ transitionDelay: `${index * 100}ms` }}
								onMouseEnter={() => setActiveService(index)}
							>
								<div
									className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 mb-4 ${
										activeService === index
											? 'bg-primary text-background'
											: 'bg-white/10 text-white'
									}`}
								>
									{category.icon}
								</div>
								<h3 className="text-lg font-semibold text-white mb-auto">{category.title}</h3>
								<div
									className={`h-1 w-0 bg-primary mx-auto rounded-full transition-all duration-300 mt-3 ${
										activeService === index ? 'w-3/4' : ''
									}`}
								></div>
								<ChevronDown
									className={`w-5 h-5 mx-auto mt-2 transition-transform duration-300 text-white/60 ${
										activeService === index ? 'rotate-180 text-primary' : ''
									}`}
								/>
							</div>
						))}
					</div>

					{/* Sub-services panel */}
					<div
						className={`bg-black/40 backdrop-blur-md rounded-lg p-6 border border-white/10 transition-all duration-500 ${
							activeService !== null
								? 'opacity-100 translate-y-0 max-h-[800px]'
								: 'opacity-0 -translate-y-10 max-h-0 overflow-hidden'
						}`}
					>
						{activeService !== null && (
							<div>
								<div className="mb-8">
									<h3 className="text-2xl font-semibold text-white mb-2">
										{serviceCategories[activeService].title}
									</h3>
									<p className="text-white/80">
										{serviceCategories[activeService].description}
									</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
									{serviceCategories[activeService].subServices.map((subService, idx) => (
										<div
											key={idx}
											className="bg-white/5 hover:bg-white/10 p-5 rounded-lg border border-white/5 transition-all duration-300 hover:-translate-y-1"
										>
											<h4 className="text-lg font-medium text-white mb-2">
												{subService.title}
											</h4>
											<p className="text-sm text-white/70">
												{subService.description}
											</p>
										</div>
									))}
								</div>
							</div>
						)}
					</div>

					{/* See All Services button */}
					<div className="flex justify-center mt-12">
						<Link to="/services">
							<Button
								variant="default"
								size="lg"
								className="group bg-primary hover:bg-primary/90 text-background px-8 py-6 text-lg flex items-center"
							>
								See All Services
								<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
