

export const postClientes = async (addedClient) => {



    const url = 'http://localhost:5000/clientes';
    const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(addedClient),
    });
    
    const data = await res.json()
    console.log(data)
    

}