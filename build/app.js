import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-124b1689.js",
			css: [assets + "/_app/assets/start-d5b4de3e.css"],
			js: [assets + "/_app/start-124b1689.js",assets + "/_app/chunks/vendor-28b3a256.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"metamask-logo.svg","size":7456,"type":"image/svg+xml"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/profile\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/profile.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/create\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/create.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/posts\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/posts/[id].svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/profile.svelte": () => import("../../src/routes/profile.svelte"),"src/routes/create.svelte": () => import("../../src/routes/create.svelte"),"src/routes/posts/[id].svelte": () => import("../../src/routes/posts/[id].svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-582ed124.js","css":["assets/pages/__layout.svelte-0941126d.css"],"js":["pages/__layout.svelte-582ed124.js","chunks/vendor-28b3a256.js","chunks/state-bb88a1e4.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-d725ce0b.js","css":[],"js":["error.svelte-d725ce0b.js","chunks/vendor-28b3a256.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-5b8c2fa1.js","css":[],"js":["pages/index.svelte-5b8c2fa1.js","chunks/vendor-28b3a256.js","chunks/state-bb88a1e4.js","chunks/Navbar-93db7c83.js"],"styles":[]},"src/routes/profile.svelte":{"entry":"pages/profile.svelte-14f1486a.js","css":[],"js":["pages/profile.svelte-14f1486a.js","chunks/vendor-28b3a256.js","chunks/Navbar-93db7c83.js"],"styles":[]},"src/routes/create.svelte":{"entry":"pages/create.svelte-80605596.js","css":[],"js":["pages/create.svelte-80605596.js","chunks/vendor-28b3a256.js","chunks/Navbar-93db7c83.js"],"styles":[]},"src/routes/posts/[id].svelte":{"entry":"pages/posts/[id].svelte-96d5d28b.js","css":[],"js":["pages/posts/[id].svelte-96d5d28b.js","chunks/vendor-28b3a256.js","chunks/state-bb88a1e4.js","chunks/Navbar-93db7c83.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}