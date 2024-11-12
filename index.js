for (let i = 0; i < catalog.length; i++) {
    catalog[i]["id"]=i+100;
}
function sortByName() {
    let st=""
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