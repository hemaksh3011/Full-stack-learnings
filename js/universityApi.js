const btn = document.querySelector("#search");
const listing = document.querySelector("#listing");
const url = "http://universities.hipolabs.com/search?country=";

btn.addEventListener("click", async () => {
    let country = document.querySelector("#country").value;
    let colleges = await getCollege(country);

    listing.innerHTML = ""; // clear old data

    for (college of colleges) {
        let li = document.createElement("li");
        li.innerText = college.name;
        listing.appendChild(li);
    }
});

async function getCollege(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("error aagya hai :", e);
        return [];
    }
}