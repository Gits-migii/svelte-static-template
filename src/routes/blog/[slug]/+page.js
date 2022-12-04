
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ params,fetch }) {
const url = `https://dev.to/api/articles/${params.slug}`;
const response = await fetch(url);


return {
    status: response.status,
    props: {
        article: response.ok && (await response.json())
    }
};
 
  throw error(404, 'Not found');
}