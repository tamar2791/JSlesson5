//א
const func1=()=>{
    const names=['Alice','Bob','Tiff','Bruce','Alice'];
    const result=names.reduce((prev,cur)=>{
        if(prev[cur]==null){
            prev[cur]=0;}
        prev[cur]++;
        return prev;
    },{})
    return result;
}
console.log(func1());
//ב
const func2=()=>{
    const letters=['a','b','a','b','c','e','e','c','d','d','d','d']
    const result=letters.reduce((prev,cur)=>{
        if(!prev.includes(cur)){
            prev.push(cur);} 
        return prev;
    },[])
    return result;
}
console.log(func2());