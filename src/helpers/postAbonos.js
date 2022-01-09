

export const postAbonos = async (abonos) => {

    const url = `http://localhost:5000/abonos`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(abonos),
    });
    
    const data = await res.json()
    console.log(data)
    

}