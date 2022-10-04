export const search = async (searchObj) => {
    const query = Array.from(Object.entries(searchObj)).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
    console.log('process.env', process.env)
    const res = await fetch(process.env.POKEDEX_URL + '?' + query);
    if (res.status >= 400) {
        throw res;
    } else {
        const body = await res.json()
        return body
    }
}