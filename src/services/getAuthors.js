import { checkError, client } from './client';

export async function getAuthors() {
  const resp = await client.from('authors').select('*');
  return checkError(resp);
}
