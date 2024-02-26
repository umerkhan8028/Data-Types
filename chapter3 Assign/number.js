var age = 24 ;
alert("I am "+ age +" Years old");

 // Check if the 'visitCount' key is present in local storage
 if (!localStorage.getItem('visitCount')) {
    // If not present, initialize the 'visitCount' variable to 1
    localStorage.setItem('visitCount', 1);
} else {
    // If present, increment the 'visitCount' variable by 1
    var visitCount = parseInt(localStorage.getItem('visitCount')) + 1;
    localStorage.setItem('visitCount', visitCount);
}

// Display the number of visits in an alert box
var visitCount = localStorage.getItem('visitCount');
alert("You have visited this site " + visitCount + " times.");

// You can also display the count on the webpage
document.write("<p>You have visited this site " + visitCount + " times.</p>");

var birth = 2000;
alert("My birth year is " + birth);

// Visitor's information
var visitorName = "Umer";
var productTitle = "T-shirt";
var quantityOrdered = 2;

// Display the order confirmation message
document.write(visitorName + " ordered " + quantityOrdered + " " + productTitle + "(s) on XYZ Clothing store.");

