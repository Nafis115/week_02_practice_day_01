var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var long_name=friends[0];
for(let i=0;i<friends.length;i++){
    if(long_name[i].length<friends[i].length){
        long_name=friends[i];
    }
}


console.log(long_name);