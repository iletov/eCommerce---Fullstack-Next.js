import { createClient } from "@sanity/client";
import createImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-04-25',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);