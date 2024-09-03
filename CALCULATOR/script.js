let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;
        
        if (value === '=') {
            string = eval(string);
        } else if (value === 'AC') {
            string = "";
        } else if (value === 'DEL') {
            string = string.substring(0, string.length - 1);
        } else {
            string += value;
        }

        input.value = string;
    });
});
