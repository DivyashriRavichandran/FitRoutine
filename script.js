const workouts = {
    beginner: {
        upper: [
            '3x8 reps - Barbell Row',
            '3x10 reps - Bicep Curls',
            '3x10 reps - Shoulder Press',
            '3x10 reps - Dumbbell Rows',
            '3x8 reps - Tricep Extensions'
        ],
        lower: [
            '3x8 reps - Goblet Squats',
            '3x8 reps - Lunges',
            '3x8 reps - Leg Raises',
            '3x10 reps - Crunches',
            '3x8 reps - Deadlift'
        ],
        full: [
            '3x20 reps - Jumping Jacks',
            '3x15 reps - Mountain Climbers',
            '3x30 sec - Plank',
            '3x12 reps - Leg Curl',
            '3x10 reps - Sit Ups'
        ]
    },
    intermediate: {
        upper: [
            '3x12 reps - Push Ups',
            '4x12 reps - Bicep Curls',
            '4x10 reps - Bench Press',
            '3x10 reps - Dumbbell Rows',
            '3x10 reps - Bench Press'
        ],
        lower: [
            '3x15 reps - Squats',
            '3x15 reps - Leg Extensions',
            '4x8 reps - Deadlifts',
            '3x12 reps - Step Ups',
            '4x10 reps - Calf Raises'
        ],
        full: [
            '3x20 reps - Burpees',
            '3x15 reps - Upright Rows',
            '3x1 min - Planks',
            '4x12 reps - Pull ups',
            '3x10 reps - Box Jumps'
        ]
    }
};

function selectLevel(level) {
    document.getElementById('level-selection').style.display = 'none';
    document.getElementById('workout-selection').classList.remove('hidden');
    localStorage.setItem('selectedLevel', level);
}

function selectWorkout(type) {
    const level = localStorage.getItem('selectedLevel');
    const workoutList = workouts[level][type];

    const checklist = document.getElementById('checklist');
    checklist.innerHTML = '';

    workoutList.forEach(workout => {
        const li = document.createElement('li');
        li.className = "flex items-center cursor-pointer py-2 px-4";
        li.style.userSelect = "none";

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = "mr-3";
        checkbox.addEventListener('change', () => toggleStrike(li));

        const span = document.createElement('span');
        span.textContent = workout;

        li.appendChild(checkbox);
        li.appendChild(span);
        
        // Handle click event on the entire list item
        li.addEventListener('click', () => {
            checkbox.checked = !checkbox.checked;
            toggleStrike(li);
        });

        checklist.appendChild(li);
    });

    document.getElementById('workout-selection').classList.add('hidden');
    document.getElementById('workout-checklist').classList.remove('hidden');
}

function toggleStrike(listItem) {
    const span = listItem.querySelector('span');
    const checkbox = listItem.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
        listItem.classList.add('completed');
        span.classList.add('line-through', 'text-orange-900');
    } else {
        listItem.classList.remove('completed');
        span.classList.remove('line-through', 'text-orange-900');
    }
}

function goBackToLevelSelection() {
    document.getElementById('workout-selection').classList.add('hidden');
    document.getElementById('level-selection').style.display = 'block';
}

function goBackToWorkoutSelection() {
    document.getElementById('workout-checklist').classList.add('hidden');
    document.getElementById('workout-selection').classList.remove('hidden');
}
