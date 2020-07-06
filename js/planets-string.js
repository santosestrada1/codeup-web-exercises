(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

     planetsArray = planetsString.split('|')

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?

     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var stringFromArrB = planetsArray.join("\n");
    console.log('String from array: \n' + stringFromArrB);

    var p2String = planetsArray.join('<br>');
    console.log(p2String)



    function makeList() {
        // Establish the array which acts as a data source for the list
        var planets = [
            'Mercury',
            'Venus',
            'Earth',
            'Mars',
            'Jupiter',
            'Saturn',
            'Uranus',
            'Neptune'
        ],
            // Make a container element for the list
            listContainer = document.createElement('div'),
            // Make the list
            listElement = document.createElement('ul'),
            // Set up a loop that goes through the items in listItems one at a time
            numberOfListItems = planets.length,
            listItem,
            i;

        // Add it to the page
        document.getElementsByTagName('body')[0].appendChild(listContainer);
        listContainer.appendChild(listElement);

        for (i = 0; i < numberOfListItems; ++i) {
            // create an item for each one
            listItem = document.createElement('li');

            // Add the item text
            listItem.innerHTML = planets[i];

            // Add listItem to the listElement
            listElement.appendChild(listItem);
        }
    }

// Usage
    makeList();

})();
