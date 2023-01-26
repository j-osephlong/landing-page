import { Skill, Skills } from "./Skill";
import { Tag, Tags } from "./Tag";

interface ProjectParameters {
	name?: string;
	description?: string;
	link?: string;
	bgColorHex?: string;
	fgColorHex?: string;
	skills?: Skill[];
	tags?: Tag[];
	secondaryLinkName?: string;
	secondaryLinkHref?: string;
}

export class Project {
	name: string;
	description: string;
	link?: string;
	bgColorHex: string;
	fgColorHex: string;
	skills: Skill[];
	tags: Tag[];
	secondaryLinkName?: string;
	secondaryLinkHref?: string;

	constructor({
		name = "Not a real project 🤷",
		description = "Unset description",
		link = undefined,
		bgColorHex = "#658E9C",
		fgColorHex = "#ffffff",
		skills = [],
		tags = [],
		secondaryLinkName = undefined,
		secondaryLinkHref = undefined,
	}: ProjectParameters) {
		this.name = name;
		this.description = description;
		this.link = link;
		this.bgColorHex = bgColorHex;
		this.fgColorHex = fgColorHex;
		this.skills = skills;
		this.tags = tags;
		this.secondaryLinkName = secondaryLinkName;
		this.secondaryLinkHref = secondaryLinkHref;
	}
}

let Projects: Project[] = [
	new Project({
		name: "micCheck",
		description: `micCheck is an audio capture and organization app written for Android`,
		skills: [
			Skills.jetpackCompose,
			Skills.material3,
			Skills.micCheckServices,
		],
		tags: [Tags.android, Tags.playstore],
		bgColorHex: "#F0736A",
		fgColorHex: "#ffffff",
		link: "https://play.google.com/store/apps/details?id=com.jlong.miccheck",
	}),
	new Project({
		name: "microPictochat",
		description:
			"Another Pictochat inspired project which allows users to create Pictochat messages and share them to other apps as images.",
		skills: [
			Skills.react,
			Skills.githubPages,
			Skills.pwa,
			Skills.githubActions,
		],
		tags: [Tags.reactJS, Tags.webDev],
		bgColorHex: "#40476D",
		// fgColorHex: "#000000",
		link: "https://j-osephlong.github.io/microPictochat",
		secondaryLinkName: "GitHub",
		secondaryLinkHref: "https://github.com/j-osephlong/microPictochat",
	}),
	new Project({
		name: "landing-page",
		description: "[The website you're currently viewing]",
		bgColorHex: "#FFD97D",
		fgColorHex: "#000000",
		skills: [Skills.vueJS, Skills.githubPages],
		tags: [Tags.webDev, Tags.vueJS],
		link: "https://github.com/j-osephlong/landing-page",
	}),
	new Project({
		name: "InfoDroid",
		description:
			"A geolocked social network written for my 2022 Technical Report.\nIncludes a Python backend server implementing a REST API, and an Android frontend client.",
		skills: [
			Skills.jetpackCompose,
			Skills.retrofitGsonOKHTTP,
			Skills.django,
			Skills.reverseGeocode,
		],
		tags: [Tags.school, Tags.serverDev, Tags.android],
		bgColorHex: "#60D394",
		fgColorHex: "#000000",
		link: "https://github.com/j-osephlong/InfoDroid",
	}),
	new Project({
		name: "SignalMapper",
		description:
			"An Android app which collects dBm and GPS measurements passively, and maps them out. Written for my 2022 Winter Mobile Communications course.",
		tags: [Tags.school, Tags.android],
		skills: [Skills.jetpackCompose, Skills.material3],
		bgColorHex: "#2A4D14",
		link: "https://github.com/j-osephlong/SignalMapper",
	}),
	new Project({
		name: "Picto",
		description:
			"A PictoChat inspired messaging platform written during the early 2020 quarantine.",
		skills: [Skills.vueJS, Skills.flask, Skills.sql],
		tags: [Tags.webDev, Tags.serverDev, Tags.vueJS],
		bgColorHex: "#A06B9A",
		link: "https://github.com/j-osephlong/Picto",
	}),
	new Project({
		name: "j-LC3",
		description: "Little Computer-3 assembler/simulator written in Python.",
		bgColorHex: "#AEE3EA",
		fgColorHex: "#000000",
		tags: [Tags.lowLevel],
		link: "https://github.com/j-osephlong/j-LC3",
	}),
	new Project({
		name: "Blume",
		description:
			"C# Game rendering engine that render's to the Windows command prompt in ascii.",
		bgColorHex: "#FCBA9C",
		fgColorHex: "#000000",
		tags: [Tags.lowLevel],
		link: "https://github.com/j-osephlong/Blume",
	}),
	new Project({
		name: "Hotel-Server",
		description:
			"A hotel booking/management website/backend server, written for CS2043.",
		skills: [Skills.flask, Skills.sql],
		tags: [Tags.group, Tags.school, Tags.serverDev],
		link: "https://github.com/j-osephlong/Hotel-Project",
	}),
	new Project({
		name: "ScanTron IDE",
		description: "A Java IDE written for CS1083.",
		bgColorHex: "#C98986",
		tags: [Tags.school, Tags.group],
		link: "https://github.com/scanTronTeam3/scanTronIDE",
	}),
];

export { Projects };
