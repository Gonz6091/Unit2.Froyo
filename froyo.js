//A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.//

// Can you live serve the HTML file?
// Is the HTML file connected to the JS file?

// Can you parse the user input into an array of froyo flavors?
// Can you build an object to track which flavors you have observed so far?
// As you iterate through the array of flavors, when should that object be updated?
// Is your logic organized into a function?


const froyoFlavors = prompt("Enter a list of froyo flavors separated by commas:", "Vanilla,vanilla,vanilla,strawberry,coffee,coffee");

const froyoArray = froyoFlavors.split(",");

function countFroyoFlavors(flavors) {
    const froyoCount = {};

    for (let i = 0; i < flavors.length; i++) {
        const flavor = flavors[i].trim().toLowerCase(); 
        if (froyoCount.hasOwnProperty(flavor)) {
            froyoCount[flavor]++;
        } else {
            froyoCount[flavor] = 1; 
        }
    }
    return froyoCount;
};

const froyoCount = countFroyoFlavors(froyoArray);

console.table(froyoCount);
