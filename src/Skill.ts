export type Skill = {
	name: string;
	description: string;
	link?: string;
};

let Skills = {
	jetpackCompose: {
		name: "Jetpack Compose",
		description:
			"Declarative and reactive UI framework for Google. Think of it as the Vue for Android UI development.",
		link: "https://developer.android.com/jetpack/compose",
	},
	material3: {
		name: "Material 3/You Interface Design",
		description:
			"Material You, or Material 3, is a new UI design language by Google, implemented first in Android 12.",
		link: "https://m3.material.io/",
	},
	micCheckServices: {
		name: "Services for Media Recorder and ExoPlayer",
		description:
			"micCheck makes use of background services for both audio capture, using MediaRecorder, and audio playback, using a customized ExoPlayer.",
	},
	vueJS: {
		name: "Vue JS 3",
		description: "Reactive and modern Javascript framework.",
		link: "https://vuejs.org",
	},
	react: {
		name: "React JS",
		description: "Reactive and modern Javascript framework.",
		link: "https://reactjs.org/",
	},
	pwa: {
		name: "PWA Progressive Web App",
		description:
			"Allows for more functional web apps which behave more like native apps.",
		link: "https://web.dev/progressive-web-apps/",
	},
	githubActions: {
		name: "Github Actions",
		description: "CI workflows built into GitHub out of the box.",
		link: "https://github.com/features/actions",
	},
	githubPages: {
		name: "Github Pages",
		description:
			"Free service used to host a github repository as a website.",
		link: "https://pages.github.com/",
	},
	retrofitGsonOKHTTP: {
		name: "Retrofit+OKHttp+GSON",
		description:
			"This app implements an API layer using retrofit to model API requests, GSON to serialize JSON data, and OKHttp to make requests.",
	},
	django: {
		name: "Django Framework",
		description:
			"Django is a Python server framework that allows for modeling a database as dataclasses.",
		link: "https://www.djangoproject.com/",
	},
	reverseGeocode: {
		name: "Google Reverse Geocode",
		description:
			"Google's reverse geocode API allows one to transform geographic coordinates into human readable locality names.",
		link: "https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse",
	},
	flask: {
		name: "Flask",
		description:
			"Minimal Python micro web framework, featuring no database abstraction layer.",
		link: "https://flask.palletsprojects.com/en/2.2.x/",
	},
	sql: {
		name: "SQL(lite) Query Language",
		description: "Database query language.",
		link: "https://www.sqlite.org/index.html",
	},
};

export { Skills };
