async function fetchData() {
    const data = [
        {
            "id": 1,
            "url": "https://www.aljazeera.com/news/longform/2023/10/9/israel-hamas-war-in-maps-and-charts-live-tracker"
        },
        {
            "id": 2,
            "url": "https://www.the-afc.com/en/national/afc_asian_cup/news/qatar_determined_to_reach_final_says_salman.html"
        },
        {
            "id": 3,
            "url": "https://www.aljazeera.com/news/2024/2/5/a-child-dies-every-two-hours-in-sudan-camp-for-displaced-people-msf"
        },
        {
            "id": 4,
            "url": "https://www.aljazeera.com/news/liveblog/2024/2/9/pakistan-election-results-2024-live-tight-race-as-vote-results-trickle-in"
        },
        {
            "id": 5,
            "url": "https://www.aljazeera.com/opinions/2023/12/31/watching-the-watchdogs-us-media-reporting-from-gaza"
        },
        {
            "id": 6,
            "url": "https://www.aljazeera.com/news/2023/11/21/somalia-floods-kill-50-people-nearly-700000-displaced-disaster-agency"
        }
    ];
    return data;
}


async function handleverifiedClick() {
    let verified = document.getElementById("matched");
    if (!!verified) {
        verified.style.display = 'none';
    }
    let failedDiv = document.getElementById("failedDiv");
    if (!!failedDiv) {
        failedDiv.style.display = 'none';
    }
}
async function handleClick() {
    const dataList = await fetchData();
    const url = await document.getElementById("url-input").value;
    if (!!url) {
        let isMatched = false;
        for (let i = 0; i < dataList.length; i++) {
            if (url === dataList[i].url) {
                isMatched = true;
                break;
            }
        }
        if (isMatched) {
            let verified = document.getElementById("matched");
            if (!!verified) {
                verified.style.display = 'block';
            }
        } else {
            let notverified = document.getElementById("failedDiv");
            if (!!notverified) {
                notverified.style.display = 'block';
            }
        }
    } else {
        alert("Please enter news url");
    }
}
function handlefeedbackclick(answer){
let textarea = document.getElementsById("url-input")
    if (answer=="yes"){
    textarea.classList.add("show")
    textarea.classList.remove("hide")
}
else{
    textarea.classList.remove("show")
}
}