//Accessing the form element and storing it in a variable
const form = document.querySelector("#taskForm");
//Accessing the task list element and storing it in a variable
const taskListElement = document.querySelector("#taskList");
// Define an empty array called 'taskList'
let taskList = [];


/*DYNAMIC MOOD RANGE*/
document.addEventListener('DOMContentLoaded', function() {
  const moodRange = document.getElementById('mood-range');
  const moodWord = document.getElementById('mood-word');
  const moodImage = document.getElementById('mood-image');

  const moods = [
      { word: 'Happy', image: '/app_assets/mood_happy.png' },
      { word: 'Calm', image: '/app_assets/mood_calm.png' },
      { word: 'Anxious', image: '/app_assets/mood_anxious.png' },
      { word: 'Sad', image: '/app_assets/mood_sad.png' },
      { word: 'Angry', image: '/app_assets/mood_angry.png' }
  ];

  function updateMood() {
      const mood = moods[moodRange.value];
      moodWord.textContent = mood.word;
      moodImage.src = mood.image;
      moodImage.alt = mood.word;
  }

  moodRange.addEventListener('input', updateMood);

  // Initialize with the first mood
  updateMood();
});


/*DYNAMIC SELF-ESTEEM RANGE*/
document.addEventListener('DOMContentLoaded', function() {
  const selfEsteemRange = document.getElementById('self-esteem-range');
  const selfEsteemWord = document.getElementById('self-esteem-word');
  const selfEsteemImage = document.getElementById('self-esteem-image');

  const selfEsteemRatings = [
      { word: 'Very Low', image: '/app_assets/self_esteem_very_low.png' },
      { word: 'Low', image: '/app_assets/self_esteem_low.png' },
      { word: 'Moderate', image: '/app_assets/self_esteem_moderate.png' },
      { word: 'High', image: '/app_assets/self_esteem_high.png' },
      { word: 'Very High', image: '/app_assets/self_esteem_very_high.png' }
  ];

  function updateSelfEsteem() {
      const selfEsteem = selfEsteemRatings[selfEsteemRange.value];
      selfEsteemWord.textContent = selfEsteem.word;
      selfEsteemImage.src = selfEsteem.image;
      selfEsteemImage.alt = selfEsteem.word;
  }

  selfEsteemRange.addEventListener('input', updateSelfEsteem);

  // Initialize with the first mood
  updateSelfEsteem();
});


/*DYNAMIC STRESS RANGE*/
document.addEventListener('DOMContentLoaded', function() {
  const stressRange = document.getElementById('stress-range');
  const stressWord = document.getElementById('stress-word');
  const stressImage = document.getElementById('stress-image');

  const stressLevels = [
      { word: 'Very Low', image: '/app_assets/stress_very_low.png' },
      { word: 'Low', image: '/app_assets/stress_low.png' },
      { word: 'Moderate', image: '/app_assets/stress_moderate.png' },
      { word: 'High', image: '/app_assets/stress_high.png' },
      { word: 'Very High', image: '/app_assets/stress_very_high.png' }
  ];

  function updateStress() {
      const stress = stressLevels[stressRange.value];
      stressWord.textContent = stress.word;
      stressImage.src = stress.image;
      stressImage.alt = stress.word;
  }

  stressRange.addEventListener('input', updateStress);

  // Initialize with the first mood
  updateStress();
});


/*DYNAMIC SLEEP RANGE*/
document.addEventListener('DOMContentLoaded', function() {
  const sleepRange = document.getElementById('sleep-range');
  const sleepWord = document.getElementById('sleep-word');
  const sleepImage = document.getElementById('sleep-image');

  const sleepLevels = [
      { word: 'Poor', image: '/app_assets/sleep_poor.png' },
      { word: 'Average', image: '/app_assets/sleep_average.png' },
      { word: 'Fair', image: '/app_assets/sleep_fair.png' },
      { word: 'Good', image: '/app_assets/sleep_good.png' },
      { word: 'Excellent', image: '/app_assets/sleep_excellent.png' }
  ];

  function updateSleep() {
      const sleep = sleepLevels[sleepRange.value];
      sleepWord.textContent = sleep.word;
      sleepImage.src = sleep.image;
      sleepImage.alt = sleep.word;
  }

  sleepRange.addEventListener('input', updateSleep);

  // Initialize with the first mood
  updateSleep();
});



/*EVERYTIME SOMEONE PRESSES SUBMIT, ADD TASK FUNCTION IS RUN AND THE PARAMETERS ARE WHATEVER THE USER HAS INPUTTED*/
//Aka we're capturing the input from the user, and populating the taskList array using the task object structure and addTask function.

//Event listener for form submission
form.addEventListener("submit", function (event) {

  //Preventing the default form submission behaviour. The default action of the form when the submit button is clicked is to submit the form's data to a URL that processes the data. 
  event.preventDefault();

  //Accessing the form elements object(?) and storing it in a variable. This '.elements' property returns a collection of all the form controls within the form (input elements, select boxes, textareas, buttons, etc.)
  const formElements = form.elements;

  //Get values from form elements
  const name = formElements.taskName.value;
  const type = formElements.taskType.value;
  const rate = parseFloat(formElements.taskRate.value);           //parseFloat is being used here to convert the user-inputted string into number
  const time = parseFloat(formElements.taskTime.value);           //parseFloat is being used here to convert the user-inputted string into number
  const client = formElements.taskClient.value;

  //Call addTask function with form values
  addTask(name, type, rate, time, client);

  //Log the updated task list array
  console.log(taskList);
});





/* MAKING A FUNCTION THAT FORMATS NEW TASKS AND PUSHES THEM INTO AN ARRAY */
// Create an object called 'task' (this is the task template?)
// Populate the properties based on the provided data model
// NOTE: delete later
let task = {
  name: "",
  type: "",
  id: Date.now(),                            //Generating unique id. This static method returns the no. of milliseconds elapsed since the epoch (W3 TUT)
  date: new Date().toISOString(),            //Generating current date. When you use .toISOString() on a Date object, it returns a string representing the date and time in this standard format
  rate: 0,
  time: 0,
  client: ""
};

// Create a function called 'addTask'
// Give the function input parameters for: name, type, rate, time, client
// Paste your object definition from above in the function
// Replace the property values with the input parameters
// Add the object to the taskList array
//this has all the required input parameters to create a task object (i.e. all the properties from the task object that aren't automatically generated)
function addTask(name, type, rate, time, client) {
  let newTask = {
    name: name,
    type: type,
    id: Date.now(),
    date: new Date().toISOString(),
    rate: rate,
    time: time,
    client: client
  };

  //Push new task to the task list array
  taskList.push(newTask);

  //Display the task on the page
  displayTask(newTask);
}

/*Call the function with test values for the input paramaters*/
// addTask("Initial Sketches", "Concept Ideation", 50, 5, "Google");
// addTask("Home page design", "Wireframe Design", 35, 3, "Samsung");
// addTask("Backend dev", "Application Coding", 50, 10, "Atlassian");
addTask("Database testing", "Testing/Debugging", 80, 5, "Deloitte");

//Log the initial state of the task list array
//console.log(taskList);





/* DISPLAYING THE TASK DETAILS BY ADDING HTML ELEMENTS TO THE PAGE - DOING THIS THROUFH ONE FUNCTION */
//the function accepts a task object as an input parameter, which provides all the data we need to create the HTML elements
function displayTask(task) {
  //Create a new list item lement to go inside our unordered list
  let item = document.createElement("li");
  //Set data-id attribute to keep track of task ID
  item.setAttribute("data-id", task.id);
  //Set inner text property so we can see the li tag appear. Populate the list item with task data using template literals and utilising property names from the task object. 
  item.innerHTML =
    `<p> <strong>${task.name}</strong> 
      <br/> 
      Type: ${task.type} 
      <br/> 
      Rate: $${task.rate}/hr
      <br/> 
      Time: ${task.time} hours
      <br/> 
      Client: ${task.client} 
    </p>`;
  //Append list item to the task list
  taskListElement.appendChild(item);
  //Clear the form inputs, ready for another item to be added
  form.reset();



  /* DELETING AN ITEM FROM THE TASK LIST */
  //Setup delete button DOM elements
  let delButton = document.createElement("button");
  //Alternative way to add text to an element like a button w/out setting the innerHTML directly.
  let delButtonText = document.createTextNode("Delete");
  delButton.appendChild(delButtonText);
  //Adding a delete button to every task (or list element)
  item.appendChild(delButton);


  //Event listener for when the delete button is clicked
  delButton.addEventListener("click", function (event) {
    //1. Deleting the relevant HTML elements from the DOM (off the page, front-end)
    item.remove(); //Removes the task item from the page when button clicked because we used 'let' to define the item, this will delete the right element.

    //2. Removing the relevant task object from the taskList array (from the dataset, back-end)
    // Filter out the element corresponding with the list item and store the new task list a.k.a it's comparing the id from the task object with the id on the HTML list item above. As long as the id doesn't match, we can keep the value in the new ver. of the taskList.
    taskList = taskList.filter(task => task.id !== parseInt(item.getAttribute('data-id')));
    // Make sure the deletion worked by logging out the whole array
    console.log(taskList);
  });
}