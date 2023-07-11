var math = parseFloat(prompt("Enter Mathematics marks: "));
var Phyasics = parseFloat(prompt("Enter Chemistry Marks: "));
var chemistry = parseFloat(prompt("Enter Physics Marks: "));
var addition = math + Phyasics + chemistry;
var average = addition / 3;
var grade;
if (average < 70) {
    grade = "Grade C";
}
else if (average < 90) {
    grade = "Grade B";
}
else {
    grade = "Grade A";
}
console.log("Mathematics Marks:=>", math);
console.log("Chemistry Marks:=>", chemistry);
console.log("Physics Marks:=>", Phyasics);
console.log("Addition is :=>", addition);
alert("Average is:=> ".concat(average, ", Grade is:=> ").concat(grade));
console.log("Avearge :=>", addition);
console.log("Grade:=>", grade);
