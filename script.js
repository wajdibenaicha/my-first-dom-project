const t=[];
function addelement(){
    let x=document.getElementById('add').value;
    t.push(x);
    document.getElementById('add').value='';
    print()
}
function removeelement(){
    let i=0;
    let x=document.getElementById('remove').value
    while(i<t.length && t[i]!=x){
        i++
    }
    if(i<t.length){
    while(i<t.length-1){
        t[i]=t[i+1];
        i++;
    }
    t.pop();
}
    document.getElementById('remove').value='';
    print();
}

function print(){
    const list = document.getElementById('list');
    list.innerHTML = ''; 
    t.forEach(task => {
        const li = document.createElement('li');
        console.log(task)
        li.innerHTML = task;
        list.appendChild(li);
    });

}
