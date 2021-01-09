let url = 'https://covid19.mathdro.id/api';
export async function getData() {
    let response = await fetch(url)
    .then(response=>response.json());
    return response;
    // try {
    //     const { data: { confirmed, recovered, deaths, lastUpdate } }  = await fetch(url);
    //     const updatedRecord = { confirmed, recovered, deaths, lastUpdate }
    //     return updatedRecord;
    // }
    // catch (error) {
    //     return false;
    // }

}