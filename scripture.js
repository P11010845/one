     window.addEventListener('load', onYourMarks, false); // Listens for when the page loads.
        
		var myContacts = new Array(); // Creates an array named myContacts.      
        
		function onYourMarks() 
		{ // When event listener onYourMarks is triggered run the function.
            var submitThatShizz = document.getElementById("thisSubmitsShizz"); // Creates a variable containing a submit button.
            var sortsFirstNamesAndShizz = document.getElementById("firstNamesAndShizz"); // Creates a variable that contains the first names table header.
            var sortsLastNamesAndShizz = document.getElementById("lastNamesAndShizz"); // More of the Same.
            var sortsDobAndShizz = document.getElementById("dobsAndShizz");
            var sortsTelephonesAndShizz = document.getElementById("telephonesAndShizz");
            var sortsEmailsAndShizz = document.getElementById("emailsAndShizz");
           
			submitThatShizz.addEventListener('click', theShizz, false); // Listens for a click event on the submit button.
			sortsFirstNamesAndShizz.addEventListener('click', sortFirstName, false); // Listens for a click event on the first names table header.
			sortsLastNamesAndShizz.addEventListener('click', sortLastName, false); //  More of the same.
			sortsDobAndShizz.addEventListener('click', sortDob, false); 
			sortsTelephonesAndShizz.addEventListener('click', sortTelephone, false); 
			sortsEmailsAndShizz.addEventListener('click', sortEmail, false);
		}
			
        function theShizz() 
		{ // when the event listener "theShizz" is triggered this function runs.
            var alphaName = document.getElementById("firstName").value; //Creates variable from the contents of form input "firstName".
            var omegaName = document.getElementById("lastName").value; //More of the same.
            var daDob = document.getElementById("dob").value;                 
            var foneNumber = document.getElementById("telephoneNumber").value; 
            var electroMail = document.getElementById("emailAddress").value;
     
			var contact = new Object(); // Adds an object to the document.
           
		    contact.firstName = alphaName; // Make the object attribute firstName the same as the variable alphaName.
            contact.lastName = omegaName; // More of the same.
            contact.dob = daDob;
            contact.telephoneNumber = foneNumber;
            contact.emailAddress = electroMail;
            myContacts.push(contact);
            
			setTheTable(); // calls the function setTheTable
        }
        function setTheTable() 
		{ // Generates the setTheTable function
            var myContactsTable = document.getElementById("flipTheTable"); // Getting the id of the table and putting it in the variable myContactsTable.
            
			myContactsTable.innerHTML = ""; // Sets the property of the innerHtml element.
            
			for (g in myContacts) { // For loop so I can keep running the code with new elements from the contacts array.
			
                var rowRowYourBoat = document.createElement("tr"); // Creates a variable with a table row in it.
                
				myContactsTable.appendChild(rowRowYourBoat); // Adds table row to the contacts table.
                
				var itemTheFirst = document.createElement("td"); // Creates a variable with a table cell in it.
                var textTheFirst = document.createTextNode(myContacts[g].firstName); // Creates a variable with the data from the first name entry in the myContacts array.
				
				var itemTheSecond = document.createElement("td"); // More of the same.
                var textTheSecond = document.createTextNode(myContacts[g].lastName); // More of the same.
                
				var itemTheThird = document.createElement("td");
                var textTheThird = document.createTextNode(myContacts[g].dob);
				
				var itemTheFourth = document.createElement("td");
                var textTheFourth = document.createTextNode(myContacts[g].telephoneNumber);
                
				var itemTheFifth = document.createElement("td");
                var textTheFifth = document.createTextNode(myContacts[g].emailAddress);
				
				itemTheFirst.appendChild(textTheFirst); // Adds the text from textThefirst to the table cell itemTheFirst.
                myContactsTable.appendChild(itemTheFirst); // Adds the table cell itemTheFirst to the table myContactsTable
                
				itemTheSecond.appendChild(textTheSecond); // More of the same.
                myContactsTable.appendChild(itemTheSecond); // More of the same.
				
				itemTheThird.appendChild(textTheThird);
                myContactsTable.appendChild(itemTheThird);
				
				itemTheFourth.appendChild(textTheFourth);
                myContactsTable.appendChild(itemTheFourth);
                
				itemTheFifth.appendChild(textTheFifth);
                myContactsTable.appendChild(itemTheFifth);
            }
        }
		
        function sortFirstName() // Calls Function sortFirstName
		{
            myContacts.sort(sortFirstNameFunction); // myContacts is sorted, the attributes eg. alphabetical or numerical is decided by the function "sort first name function".
            setTheTable();
        }
		
        function sortFirstNameFunction(a, b)
		{
            return a.firstName > b.firstName;
        }
		
        function sortLastName() 
		{
            myContacts.sort(sortLastNameFunction);
            setTheTable();
        }
        function sortLastNameFunction(a, b) 
		{
            return a.lastName > b.lastName;
        }
		
        function sortDob() 
		{
            myContacts.sort(sortDobFunction);
            setTheTable();
        }
		
        function sortDobFunction(a, b) 
		{
            return a.dob > b.dob;
        }
		
        function sortTelephone() 
		{
            myContacts.sort(sortTelephoneFunction);
            setTheTable();
        }
		
        function sortTelephoneFunction(a, b) 
		{
            return a.telephoneNumber > b.telephoneNumber;
        }
		
        function sortEmail() 
		{
            myContacts.sort(sortEmailFunction);
            setTheTable();
        }
		
        function sortEmailFunction(a, b) 
		{
            return a.emailAddress > b.emailAddress;
        }
		