const baseUrl = 'https://pokeapi.co/api/v2/';

export function get<T>(
  url: string,
  options: RequestInit | undefined,
): Promise<T> {
  return fetch(baseUrl + url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<T>;
  });
}
