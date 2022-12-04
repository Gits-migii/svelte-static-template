import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ params,fetch }) {
const url = 'https://dev.to/api/articles?tag=svelte&per_page=5&page=1';
const response = await fetch(url);


return {
    status: response.status,
    props: {
        article: response.ok && (await response.json())
    }
};
 
  throw error(404, 'Not found');
}