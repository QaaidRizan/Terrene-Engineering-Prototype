import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const statsData = [
	{ label: 'Happy Clients', value: 2500, suffix: '+' },
	{ label: 'Qualified Engineers', value: 180, suffix: '+' },
	{ label: 'Years of Experience', value: 17, suffix: '+' },
	{ label: 'Countries Served', value: 30, suffix: '+' } // You can adjust this value
];

const StatCounter = ({ value, suffix = '', duration = 2 }) => {
	const [count, setCount] = useState(0);
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true
	});

	useEffect(() => {
		if (inView) {
			let start = 0;
			const end = Math.min(value, 9999);
			const increment = end / (duration * 60);
			const timer = setInterval(() => {
				start += increment;
				if (start > end) {
					setCount(end);
					clearInterval(timer);
				} else {
					setCount(Math.floor(start));
				}
			}, 16.67); // 60fps

			return () => clearInterval(timer);
		}
	}, [inView, value, duration]);

	return <span ref={ref} className="text-4xl font-bold">{count}{suffix}</span>;
};

const CompletionStats = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true
	});

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<section className="py-12 bg-black/20 backdrop-blur-md border-y border-white/10">
			<div className="container mx-auto px-4">
				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: {
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.6,
								staggerChildren: 0.2
							}
						}
					}}
					className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
				>
					{statsData.map((stat, index) => (
						<motion.div
							key={index}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 }
							}}
							className="flex flex-col items-center"
						>
							<StatCounter value={stat.value} suffix={stat.suffix} />
							<div className="h-1 w-12 bg-primary/60 rounded-full my-3"></div>
							<div className="text-white/80 text-sm uppercase tracking-wider">{stat.label}</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default CompletionStats;


// Then in your page component:
<CompletionStats />