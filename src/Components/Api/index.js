let url = 'https://covid19.mathdro.id/api';
export async function getData() {
    let response = await fetch(url)
        .then(response => response.json());
    return response;

}

export async function getDailyRecord() {
    let response = await fetch('https://covid19.mathdro.id/api/daily')
        .then(response => response.json());
    return response;
}