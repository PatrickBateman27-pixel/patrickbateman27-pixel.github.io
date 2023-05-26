function toggleCompletion(exercise) {
      exercise.classList.toggle("exercise-done");
    }

    function resetExerciseStatus() {
      var exercises = document.getElementsByClassName("exercise-done");
      for (var i = exercises.length - 1; i >= 0; i--) {
        exercises[i].classList.remove("exercise-done");
      }
    }

    function increaseWeight(inputId) {
      var weightInput = document.getElementById(inputId);
      var weight = parseFloat(weightInput.value);
      if (!isNaN(weight)) {
        weight += 2.5;
        weightInput.value = weight.toFixed(2);
      }
    }

    function changeDayBoxColor(dayId) {
      var dayBox = document.getElementById(dayId);
      dayBox.classList.add('day-box');
    }
<script>
    function markExerciseComplete(button) {
      var exercise = button.parentNode;
      exercise.classList.toggle('exercise-done');
    }

    function increaseWeight(button) {
      var weightInput = button.parentNode.querySelector('.exercise-weight-input');
      var currentWeight = parseFloat(weightInput.value);
      var newWeight = currentWeight + 2.5;
      weightInput.value = newWeight.toFixed(1);
    }
  </script>
function changeColor(color) {
  const body = document.body;
  body.className = ""; // Remove existing classes
  
  if (color !== "default") {
    body.classList.add(color);
  }
}
function changeColor(color) {
  const body = document.body;
  body.className = ""; // Remove existing classes
  
  if (color !== "default") {
    body.classList.add(color);
  }
}

function saveWeight(exerciseId) {
  const weightInput = document.getElementById(`weight-${exerciseId}`);
  const weight = weightInput.value;
  
  localStorage.setItem(`weight-${exerciseId}`, weight);
}

function loadWeights() {
  const weightInputs = document.querySelectorAll('[id^="weight-"]');
  
  weightInputs.forEach((input) => {
    const exerciseId = input.id.replace("weight-", "");
    const weight = localStorage.getItem(`weight-${exerciseId}`);
    
    if (weight) {
      input.value = weight;
    }
  });
}

// Call loadWeights on page load to retrieve weights from local storage
window.addEventListener("load", loadWeights);
