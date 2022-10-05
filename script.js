
// var that = new XMLHttpRequest();
// that.open('GET', 'this, false);
// try {
//   that.send();
// } catch(exception) {
//     if(exception.name == 'NetworkError'){
//         console.log('There was a network error.');
//      }
// }

function completeAlert(){
    alert('Reloaded');
    return true;
}

setTimeout(completeAlert, 2000); /* <-- No parentheses - passing only the function definition */