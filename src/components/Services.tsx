import React, { useState, useEffect, useRef } from 'react';
import { Building2, Cog, Ruler, Shield, Activity, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import architecturalBg from '../assert/Architectural.jpg';
import engineeringBg from '../assert/Engineering.jpg';
import technicalBg from '../assert/Technical.jpg';
import projectManagementBg from '../assert/ProjectManagment.jpg';
import specializedServiceBg from '../assert/Service.jpg';

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
		<section id="services" className="py-20 bg-background overflow-hidden w-full">
			<div className="w-full max-w-[2400px] mx-auto px-4 md:px-8 lg:px-16">
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

						{/* Image with enhanced premium white glow effect */}
						<div className="relative h-96 md:h-[26rem] overflow-visible transform transition-all duration-700 delay-300">
							{/* Enhanced outer white glow effect */}
							<div className="absolute -inset-6 bg-gradient-to-r from-black/30 via-white/15 to-black/30 rounded-xl blur-2xl opacity-90 z-0"></div>
							
							{/* Secondary blue-accented glow */}
							<div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-white/8 to-transparent rounded-lg blur-xl opacity-80 z-0"></div>
							
							{/* Additional inner white glow */}
							<div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-lg blur-md opacity-60 z-5"></div>
							
							{/* Main image container with enhanced styling */}
							<div className="relative h-full overflow-hidden rounded-lg transform transition-all duration-700 z-10"
								 style={{
								   boxShadow: '0 25px 50px -12px rgba(20,20,20,0.7), 0 15px 25px -7px rgba(14,117,160,0.25), 0 0 0 1px rgba(255,255,255,0.15) inset, 0 0 30px rgba(255,255,255,0.12) inset'
								 }}>
								{/* Top edge highlight */}
								<div className="absolute top-0 left-0 w-full h-[3px] bg-white/40 blur-[0.5px] z-20"></div>
								
								{/* Corner highlight */}
								<div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-white/30 to-transparent opacity-60 blur-sm z-10"></div>
								
								{/* Bottom right corner glow */}
								<div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/30 via-white/20 to-transparent opacity-60 blur-md z-10"></div>
								
								{/* Image overlay gradient */}
								<div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
								
								<img
									src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
									alt="Engineering services"
									className="w-full h-full object-cover"
								/>
							</div>
							
							{/* Enhanced decorative corner elements with glow */}
							<div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-white/40 rounded-tl-md z-20">
								<div className="absolute -inset-1 bg-white/20 blur-sm"></div>
							</div>
							<div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-white/40 rounded-br-md z-20">
								<div className="absolute -inset-1 bg-white/20 blur-sm"></div>
							</div>
							
							{/* Subtle animated glow */}
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 animate-pulse rounded-lg z-5"
								 style={{animationDuration: '3s'}}></div>
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
						className={`relative overflow-hidden rounded-lg p-6 border border-white/10 transition-all duration-500 ${
							activeService !== null
								? 'opacity-100 translate-y-0 max-h-[800px]'
								: 'opacity-0 -translate-y-10 max-h-0 overflow-hidden'
						}`}
					>
						{/* Dynamic background image for Architectural category */}
						{activeService === 0 && (
							<div className="absolute inset-0 -z-10">
								<img 
									src={architecturalBg} 
									alt="Architectural background" 
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>
							</div>
						)}
						
						{/* Dynamic background image for Engineering category */}
						{activeService === 1 && (
							<div className="absolute inset-0 -z-10">
								<img 
									src={engineeringBg} 
									alt="Engineering background" 
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>
							</div>
						)}

						{/* Dynamic background image for Technical category */}
						{activeService === 2 && (
							<div className="absolute inset-0 -z-10">
								<img 
									src={technicalBg} 
									alt="Technical background" 
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>
							</div>
						)}

						{/* Dynamic background image for Project Management category */}
						{activeService === 3 && (
							<div className="absolute inset-0 -z-10">
								<img 
									src={projectManagementBg} 
									alt="Project Management background" 
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>
							</div>
						)}

						{/* Dynamic background image for Specialized Services category */}
						{activeService === 4 && (
							<div className="absolute inset-0 -z-10">
								<img 
									src={specializedServiceBg} 
									alt="Specialized Services background" 
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>
							</div>
						)}

						{/* Default background for other categories */}
						{activeService !== 0 && activeService !== 1 && activeService !== 2 && activeService !== 3 && activeService !== 4 && (
							<div className="absolute inset-0 bg-black/40 backdrop-blur-md -z-10"></div>
						)}
						
						{activeService !== null && (
							<div className="relative z-10">
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
											className="bg-white/5 hover:bg-white/10 p-5 rounded-lg border border-white/5 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
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
