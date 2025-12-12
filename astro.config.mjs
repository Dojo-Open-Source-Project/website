// @ts-check

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import starlightBlog from "starlight-blog";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
	site: "https://dojo-osp.org",

	prefetch: {
		prefetchAll: true,
	},

	integrations: [
		starlight({
			title: "Dojo Open Source Project",
			logo: {
				src: "./src/assets/dojo.svg",
			},
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/Dojo-Open-Source-Project/",
				},
				{
					icon: "x.com",
					label: "X.com",
					href: "https://x.com/PavelTheCoder/",
				},
			],
			sidebar: [
				{
					label: "Installing Dojo",
					items: [
						{ label: "Requirements", slug: "install/requirements" },
						{
							label: "Install dependencies",
							slug: "install/install-dependencies",
						},
						{
							label: "Create segregated user",
							slug: "install/segregated-user",
						},
						{
							label: "Download and verify Dojo",
							slug: "install/download-and-verify",
						},
						{ label: "Configure Dojo", slug: "install/configure-dojo" },
						{ label: "Install Dojo", slug: "install/install-dojo" },
						{
							label: "Monitoring syncing status",
							slug: "install/monitoring-syncing-status",
						},
					],
				},
				{
					label: "Using Dojo",
					items: [
						{
							label: "Dojo Maintenance Tool",
							slug: "usage/dojo-maintenance-tool",
						},
						{
							label: "General usage practice",
							slug: "usage/general-usage-practice",
						},
						{
							label: "Common terminal commands",
							slug: "usage/common-terminal-commands",
						},
						{
							label: "Personal block explorer",
							slug: "usage/personal-block-explorer",
						},
						{ label: "Healthy logs", slug: "usage/healthy-logs" },
						{
							label: "Viewing and editing configuration files",
							slug: "usage/view-edit-config-files",
						},
						{ label: "Updating Dojo", slug: "usage/updating-dojo" },
					],
				},
				{
					label: "API Docs",
					collapsed: true,
					autogenerate: { directory: "api" },
				},
			],
			plugins: [
				starlightBlog({
					title: "Releases",
					postCount: 5,
					recentPostCount: 5,
					prefix: "releases",
				}),
				starlightImageZoom(),
			],
		}),
		react(),
		mdx(),
		sitemap(),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
