export const BASE_URL = 'https://swapi.dev/api/planets/'

export const fetcher = (url: string) => fetch(url).then(res => res.json())
