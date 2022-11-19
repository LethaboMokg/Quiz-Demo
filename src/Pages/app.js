function validateQuiz() {
    var score = 0;
    var name = document.getElementById('name');
    var right_answer1 = document.getElementById('right1');
    var right_answer2 = document.getElementById('right2');
    var right_answer3 = document.getElementById('right3');
    var right_answer4 = document.getElementById('right4');
    var right_answer5 = document.getElementById('right5');
    var right_answer6 = document.getElementById('right6');
    var right_answer7 = document.getElementById('right7');
    var right_answer8 = document.getElementById('right8');
    var right_answer9 = document.getElementById('right9');
    var right_answer10 = document.getElementById('right10');

    if (right_answer1.checked == true) {
        score++
    }
    if (right_answer2.checked == true) {
        score++
    }
    if (right_answer3.checked == true) {
        score++
    }
    if (right_answer4.checked == true) {
        score++
    }
    if (right_answer5.checked == true) {
        score++
    }
    if (right_answer6.checked == true) {
        score++
    }
    if (right_answer7.checked == true) {
        score++
    }
    if (right_answer8.checked == true) {
        score++
    }
    if (right_answer9.checked == true) {
        score++
    }
    if (right_answer10.checked == true) {
        score++
    }
    if (name.value === '') {
        alert('Please enter your name ')
    } else {
        firebase.database().ref('score').set(score)
        document.write('Your score is' + score +'/10')
    }
}