
export const getAbonos = async () => {
    const url = 'http://localhost:5000/abonos';
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    return data
}
 