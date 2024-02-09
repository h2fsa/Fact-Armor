
async function printJSON() {

    const response = await fetch("./js/journalist.json");
    const json = await response.json();
    console.log(json);
}
async function fetchData() {
    printJSON();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '[INSERT API KEY]',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
   
//   const data=  await fetch("./journalist.json")
//                 .then((res) => {
//                     if (!res.ok) {
//                         throw new Error
//                             (`HTTP error! Status: ${res.status}`);
//                     }
//                     console.log(res)
//                     return res.json();
//                 })
//                 .then((data) => 
//                       console.log(data))
//                 .catch((error) => 
//                        console.error("Unable to fetch data:", error));



    // const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Toronto&minDate=2022-10-09&maxDate=2022-10-12&page=1', options)
    // const record = await res.json()
    // console.log(data)

    // document.getElementById("concerts").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');
}
fetchData(); 