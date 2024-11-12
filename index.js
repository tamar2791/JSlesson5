for (let i = 0; i < catalog.length; i++) {
    catalog[i]["id"]=i+100;
}
let st="";
function sortByName() {
    let name=document.getElementById("1").value;
    let arr=catalog.filter(item=>item.title.includes(name));
    for (const item of arr) {
        st+="title: "+item.title+"</br>"
        st+="artist: "+item.artist+"</br>"
        st+="country: "+item.country+"</br>"
        st+="company: "+item.company+"</br>"
        st+="price: "+item.price+"</br>"
        st+="year: "+item.year+"</br>"+"</br>"
    }
    document.getElementById("p1").innerHTML=st;
}
const arrCountries=catalog.reduce((prev,cur)=>{
    if(!prev.includes(cur.country))
        prev.push(cur.country);
    return prev;
},[]).sort();
for (const item of arrCountries) {
    document.getElementById("sel").innerHTML+="<option>"+item+"</option>"
};
function sortByCountry() {
    st="";
    let country=event.target.value;
    let arr=catalog.filter(item=>item.country===country);
    for (const item of arr) {
        st+="title: "+item.title+"</br>"
        st+="artist: "+item.artist+"</br>"
        st+="country: "+item.country+"</br>"
        st+="company: "+item.company+"</br>"
        st+="price: "+item.price+"</br>"
        st+="year: "+item.year+"</br>"+"</br>"
    }
    document.getElementById("p1").innerHTML=st;
}