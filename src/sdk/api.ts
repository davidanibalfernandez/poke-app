const baseUrl = 'https://beta.pokeapi.co/graphql/v1beta';

export function get<T>(options: RequestInit | undefined): Promise<T> {
  const request = new Request(baseUrl, {
    ...options,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return fetch(request).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<T>;
  });
}
