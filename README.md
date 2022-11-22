# Development

### Link to Deployed Website
https://rainycloud123.github.io/development/

### Goal and Value of the Application
- goal is to create an easy to use web application to browse rescue puppies 
(most likely at a shelter). Users are able to filter the puppies by breed and 
gender and they can sort the puppies by age. Puppies can also be added to a save 
for later list where the total will be calculated (this is essentially a cart).

### Usability Principles Considered
- This site should be fairly straight forward/intuitive to use. The buttons are 
clearly labled stating thier purpose and there is not an overwhelming amount of 
information.
- the dogs are organized with all of their pictures being the same size and other
touches of hierarchy such as button size and title are considered. 

### Organization of Components
- The main component I use is a dog component which has all of hte attibutes of 
the dogs. There is also a dog_copy component which is the same as the dog but with a slightly different button configuration to allow for a seperate save and unsave button.
This component is used in a map call in my app class to lay it out the items
on the page. 

### How Data is Passed Down Through Components
- I first set up a pet-data.json file that contains all of the information for
the dogs. Then this is put into a dog component using "props.item.<attribute here>".
- this component and the data in the .json file are imported into the app class
where they are used and displayed/filtered/sorted.
- The Dog component is used when we add to and remove from the cart/aggregator using
a map call. It is also used when the items are initally dipslayed and arranged on the page. 


### How the User Triggers State Changes
- the user triggers state changes by clicking buttons. These buttons are connected
to the array of items (initialized with useState()) that will be added to, removed from, filtered, or sorted.
The filter and sort items essentially have a flag/boolean and the state is determined
on whether that boolean is currently returning true or false. 

