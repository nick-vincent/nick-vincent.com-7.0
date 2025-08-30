import type { PageLoad } from './$types';
import { data } from '$lib/images/faces/_manifest.js';
import slugify from 'slugify';

type Image = {
	id: string;
	title: string;
	date: string;
	caption: string;
	buy?: string;
};

const getSlug = (image: Image) => {
	return `${image.date}-${slugify(image.title, { lower: true, strict: true })}`;
};

const getImageFilePath = (image: Image) => {
	return `/src/lib/images/faces/${getSlug(image)}.png`;
};

export const load: PageLoad = ({ params }) => {
	const slug = params.slug;

	const index = data.findIndex((image: Image) => {
		return getSlug(image) === slug;
	});

	if (index === -1) {
		throw new Error(`Image with slug "${slug}" not found`);
	}

	const image = data[index];
	const nextSlug = data[index + 1] ? getSlug(data[index + 1]) : getSlug(data[0]);
	const prevSlug = data[index - 1] ? getSlug(data[index - 1]) : getSlug(data[data.length - 1]);

	return { image, slug, nextSlug, prevSlug, path: getImageFilePath(image) };
};
