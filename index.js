for (let i = 0; i < catalog.length; i++) {
    catalog[i]["id"] = i + 100;
}
function sortByName() {
    document.getElementById("t").innerHTML = "";
    let name = document.getElementById("1").value;
    let arr = catalog.filter(item => item.title.includes(name));
    for (const item of arr) {
        myTable(item)
    }
    document.getElementById("p1").innerHTML = st;
}
const arrCountries = catalog.reduce((prev, cur) => {
    if (!prev.includes(cur.country))
        prev.push(cur.country);
    return prev;
}, []).sort();
for (const item of arrCountries) {
    document.getElementById("sel").innerHTML += "<option>" + item + "</option>"
};
function sortByCountry() {
    document.getElementById("t").innerHTML = "";
    let country = event.target.value;
    let arr = catalog.filter(item => item.country === country);
    for (const item of arr) {
        myTable(item)
    }
    document.getElementById("p1").innerHTML = st;
}
function findByYears() {
    document.getElementById("t").innerHTML = "";
    st = ""
    let y1 = document.getElementById("y1").value;
    let y2 = document.getElementById("y2").value;
    const disk = catalog.find(item => item.year > y1 && item.year < y2);
    myTable(disk)
}
function myTable(d) {
    document.getElementById("t").innerHTML += "<table>" + "<tr>" + "<td>" + d.title + "</td>" + "<td>" + d.artist + "</td>" + "<td>" + d.country + "</td>" + "<td>" + d.company + "</td>" + "<td>" + d.price + "</td>" + "<td>" + d.year + "</td>" + "</tr"

}
function addDisk() {
    const disk = {
        id: catalog[catalog.length - 1].id + 1,
        title: document.getElementById("title").value,
        artist: document.getElementById("artist").value,
        country: document.getElementById("country").value,
        company: document.getElementById("company").value,
        price: document.getElementById("price").value,
        year: document.getElementById("year").value
    };
    catalog.push(disk);
    document.getElementById("title").value = ""
    document.getElementById("artist").value = ""
    document.getElementById("country").value = ""
    document.getElementById("company").value = ""
    document.getElementById("price").value = ""
    document.getElementById("year").value = ""
    alert("הדיסק נוסף בהצלחה!");
}