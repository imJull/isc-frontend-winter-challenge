

export const postAbonos = async (abonos) => {
    try{
      const url = `http://localhost:5000/abonos`;
      const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-type' : 'application/json'
          },
          body: JSON.stringify(abonos),
      });
      
      const data = await res.json()
      return data

    }catch(error){
      console.log(error);
    }
    
}
