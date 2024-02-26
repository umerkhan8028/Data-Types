 // Declare 3 variables in one statement
 var variable1, variable2, variable3;

//  Declare 5 legal variable names
 var $my_1stVariable;
 var camelCaseVariable;
 var _underscoreVariable;
 var number123;
 var first_name;

//  Declare 5 illegal variable names
//  Note: These will cause syntax errors and should not be used
//  var 123illegalVariable;  // Starts with a number
//  var my-variable;        // Contains a hyphen
//  var my variable;        // Contains a space
//  var alert;              // Reserved keyword in JavaScript
//  var !notAllowed;        // Contains an exclamation mark

 // Display the information in the browser
 document.write("<h1>Rules for naming JS variables</h1>");
 document.write("<p>Variable names can only contain letters, numbers, $, and _.</p>");
 document.write("<p>Variables must begin with a letter, $, or _. For example $name, _name, or name.</p>");
 document.write("<p>Variable names are case-sensitive.</p>");
 document.write("<p>Variable names should not be JS reserved keywords.</p>");