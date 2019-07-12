function check(){
    var q1 = document.quiz.q1.value;
    var score = 0;

    if (q1 == 90){
        score++;
    }


    document.getElementById("score_number").innerHTML="Score: " + score;
}