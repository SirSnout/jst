/*create a program that will ask the users name, age, and reddit username. 
have it tell them the information back, in the format:

your name is (blank), you are (blank) years old, and your username is (blank) 

for extra credit, have the program log this information in a file to be accessed later.
*/

name = prompt("Please tell me your name");
age = prompt("Please tell me your age");
username = prompt("Please tell me your user name");
out = "Your name is " + name +  " Your age is " + age + " Your username is " + username";
document.write("<h1>" + out + "</h1>");
console.save(out, [1]);