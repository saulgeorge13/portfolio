
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Saul",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hi, I'm Saul!",
	description: "Data enthusiast with a passion for using technology to solve complex problems.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1kAZakN5bmdcoWPFV2xkWg5e4D30I1E-D/view?usp=drive_link",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "My 1-min pitch",
	description: [
		"I'm an (almost) graduate from the University of British Columbia, pursuing a Bachelor of Science in Computer Science and Statistics.",
		"My expertise includes Python, machine learning, and data analysis, and I've worked on projects ranging from backtesting and implementation of quant alpha factors to developing scalable data-driven dashboards and automated reporting processes.",
		"As a teaching assistant at the UBC, I've helped students master the basics of artificial intelligence. While at UBC I have been recognized for my academic achievements with the Outstanding International Student Award and the Faculty of Science Dean's Honor List.",
		"In my free time, I enjoy hiking in the mountains, and trying out new restaurants as a self-proclaimed foodie. I'm always looking for new challenges and opportunities to grow. Feel free to reach out and connect to chat about all things data, or hit me up with your suggested places to visit!"
	],
}

export const work = {
	title: "My experience",
	description: "For a more in depth breakdown of my responsibilities please refer to my resume!",
	cards: [
		{
			title: "British Columbia Invesment Management Corporation (BCI)",
			description: "12 months working as an intern in the Quant Equity team.",
			icon: null,
			// image: "config\\bci-logo.png"
		},
		{
			title: "Canada Pension Plan (CPP)",
			description: "4 months working as an intern analyst in Total Fund Management",
			icon: null,
			// image: "config\\bci-logo.png"
		},
		{
			title: "University of British Columbia (UBC)",
			description: "12 months working as a teaching assistant for CPSC 322: Intro to Artificial Intelligence",
			icon: null,
			// image: "config\\bci-logo.png"
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Movie Recommender",
			description: "Recommend movies based on 3 different approaches. Implemented with Python pandas and sklearn",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/saulgeorge13/MovieRecommender",
				},
			]
		},
		{
			title: "Stock Market Analysis",
			description: "Visualize and analyze the performance of my personal investment portfolio. Uses Jupyter notebooks, Pandas Datareader and matplotlib",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/saulgeorge13/StockMarketAnalysis",
				},
			]
		},
		{
			title: "Space Fighters",
			description: "My favourite arcade game, I just got tired of having to constantly search for emulators. Implemented with Python pygame",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/saulgeorge13/SpaceFighters",
				},
			]
		},
		{
			title: "Tic-Tac-Toe",
			description: "TicTacToe Project as set out by Harvard CS50's Introduction to AI with Python course. Utilizes min-max algorithm",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/saulgeorge13/tictactoe",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to reach out to me on Linkedin or through email!",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:georgesaul58@gmail.com",
			isPrimary: true,
		}
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Saul George | Python | Data | Quant Research",
	description: "UBC graduate with experience with data analysis, machine learning and quant research",
	image: profile,
}

export const links = {
	image: profile.src,
	title: "@saulgeorge13",
	description: "Reach out to me!",
	cards: [
		{
			title: "GitHub",
			link: "https://github.com/saulgeorge13/",
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/saulgeorge13/",
		},
	]
}