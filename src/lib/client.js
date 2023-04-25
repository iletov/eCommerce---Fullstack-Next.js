import { createClient } from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";

export const client = createClient({
    projectId: process.env.NEXT_PUBLICK_SANITY_ID,
    dataset: 'production',
    apiVersion: '2023-04-25',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);