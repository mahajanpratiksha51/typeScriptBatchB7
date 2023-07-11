let math=parseFloat(prompt("Enter Mathematics marks: "));
let Phyasics=parseFloat(prompt("Enter Chemistry Marks: "));
let chemistry=parseFloat(prompt("Enter Physics Marks: "));

let addition =math+Phyasics+chemistry;
let average=addition/3;
let grade;
if(average<70){
    grade= "Grade C";

}else if( average<90){
    grade= "Grade B";

    
}else{
    grade="Grade A"
}

console.log("Mathematics Marks:=>",math);
console.log("Chemistry Marks:=>",chemistry);
console.log("Physics Marks:=>",Phyasics);
console.log("Addition is :=>",addition);
alert(`Average is:=> ${average}, Grade is:=> ${grade}`)
console.log("Avearge :=>",addition);

console.log("Grade:=>",grade);








