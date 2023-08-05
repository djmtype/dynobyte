import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import settings from '../settings.json';

export async function get(context) {
	const blog = await getCollection('blog');
	return rss({
		title: settings.title,
		description: settings.description,
		
		site: settings.url,
		customData: `<language>en-us</language>`,

		items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      customData: `<language>en-us</language>`,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })),

		// items: posts.map((post) => ({
		// 	...post.data,
		// 	link: `/blog/${post.slug}/`,
		// 	pubDate: post.data.date,
		// 	description: post.data.description
		// })),
	});
}
