// My implementation

// const checkboxes = Array.from(document.querySelectorAll('.item'));

// let isShiftOn = false;

// document.addEventListener('keydown', (e) => {
//   if (e.keyCode === 16) {
//     isShiftOn = true;
//     // console.log(`Shift Down! ${isShiftOn}`);
//   }
// });

// document.addEventListener('keyup', (e) => {
//   if (e.keyCode === 16) {
//     isShiftOn = false;
//     // console.log(`Shift Up! ${isShiftOn}`);
//   }
// });

// let firstValue = 0;
// let secondValue = 0;

// // Change checkbox status true if holding down shift
// for (let checkbox in checkboxes) {
//   checkboxes[checkbox].addEventListener('change', () => {
//     if (!isShiftOn) firstValue = +checkbox;

//     if (isShiftOn) {
//       secondValue = +checkbox;

//       for (let i = firstValue + 1; i < secondValue; i++) {
//         if (checkboxes[i].firstElementChild.checked !== true) {
//           checkboxes[i].firstElementChild.checked =
//             !checkboxes[i].firstElementChild.checked;
//         }
//       }

//       for (let i = secondValue + 1; i < firstValue; i++) {
//         if (checkboxes[i].firstElementChild.checked !== true) {
//           checkboxes[i].firstElementChild.checked =
//             !checkboxes[i].firstElementChild.checked;
//         }
//       }
//     }
//   });
// }

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheck)
);
