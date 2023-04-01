import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import 'url-search-params-polyfill';
import { setupURLPolyfill } from 'react-native-url-polyfill'

setupURLPolyfill();

const client = sanityClient({
    projectId: '4cczczgj',
    dataset: 'production',
    useCdn : true,
    apiVersion: '2021-10-21',
})

const builder = imageUrlBuilder(client);
export function urlFor(source) {
    return builder.image(source);
}

export default client;