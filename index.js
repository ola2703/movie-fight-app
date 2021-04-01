const fetchData = async () => {
    const response = await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=fc5d2d36", {
        params:{
            s: 'avengers'
        }
    });
    console.log(response.data);
}

fetchData();
