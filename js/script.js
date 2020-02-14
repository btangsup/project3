$('document').ready(function(){

    const results = []
    const allQuestions = [
        {
            question: "Which lion king character best represents you?",
            options: [
                "Nala", //redbone
                "Simba", //sober
                "Mufasa", //this is america
                "Scar", //bonfire
                "Rafiki" //3005
            ],
        },
        {   
            questionNumb: "Question 2",
            question: "Favourite Food?",
            options: [
                "Peanut-Butter Chocolate Cake with Kool Aid", //redbone
                "Fries", // sober
                "Hambugers", // this is america
                "Smores", //bonfire
                "Pokebowl" // 3005
            ],
        },
        {   
            questionNumb: "Question 3",
            question: "What's your emoji?",
            options: [
                "Alien 👽", // 3005
                "Fire 🔥", // bonfire
                "Canadian Flag", // this is america
                "Flex 💪", // redbone
                "Mind blown 🤯" // sober
            ],
        },
        {
            questionNumb: "Question 4",
            question: "What's your happy place?",
            options: [
                "Home in my cozy room", // redbone
                "At a party", // 3005
                "With your friends", // sober
                "Outdoors", //bonfire
                "Travelling around the world" // this is america
            ],
        },
        {
            questionNumb: "Question 5",
            question: "Which music mood best describes you?",
            options: [
                "I'll rap while wrapping tortilla wraps", //bonfire
                "I infintely sound better when I sing in the shower", //redbone
                "Sitting by the fireplace leaning back while listening my jams", // This is America
                "I wanna dance, I wanna grove", // sober
                "Need to turn up!" // 3005
            ],
        },
    ];

    // Start the quiz!
    $(".startQuizBtn").click(function () {
        $('html, .quiz1').animate({
            scrollTop: $(".quiz1").offset().top
        }); 
    });

    // transition to next question
    $(".submitButton").click(function () {
        const offsetTop = $(this).offset().top + 100;
        $('html, .quiz2').animate({

            scrollTop: offsetTop
        }, 'slow');
    });

    // score counter for which song is clicked the most

    let sober = 0;
    let thisIsAmerica = 0;
    let redbone = 0;
    let three005 = 0;
    let bonfire = 0;

    //Question 1, prevent defaults and have show h2, h3 tags on click

    $('#question1').on('submit', function (event) {
        event.preventDefault();

        //capture user input

        const question1 = $('input[name=question1]:checked').val();

        // push into an empty array as an object containing the value
        const result = {};
        result.title = question1;
        result.question1Value = question1;
        results.push(result);

        const questionNumb = allQuestions[1].questionNumb;
        const question = allQuestions[1].question;

        // prevent any additional content being added
        $('.quiz2 h2').empty();
        $('.quiz2 h3').empty(); 
        
        // add h2, h3 elements dynamically and use css styling to fade in the next question
        $('.quiz2').css('opacity', '1');
        $('.quiz2 h2').append(questionNumb);
        $('.quiz2 h3').append(question); 

        // created an if/else statement to track which value was picked. increment of 1

        if (question1 === 'sober') {
            sober++;
        } else if (question1 === 'thisIsAmerica') {
            thisIsAmerica++;
        } else if (question1 === 'redbone') {
            redbone++;
        } else if (question1 === 'three005') {
            three005++;
        } else {
            bonfire++;
        }  
    })

    //Question 2
    
    $('#question2').on('submit', function (event) {

        //prevent default action from loading a new page
        event.preventDefault();

        const question2 = $('input[name=question2]:checked').val();

        const result = {};
        result.title = question2;
        result.question2Value = question2;
        results.push(result);

        const questionNumb = allQuestions[2].questionNumb;
        const question = allQuestions[2].question;

        $('.quiz3 h2').empty();
        $('.quiz3 h3').empty();

        $('.quiz3').css('opacity', '1');
        $('.quiz3 h2').append(questionNumb);
        $('.quiz3 h3').append(question);

        if (question2 === 'sober') {
            sober++;
        } else if (question2 === 'thisIsAmerica') {
            thisIsAmerica++;
        } else if (question2 === 'redbone') {
            redbone++;
        } else if (question2 === 'three005') {
            three005++;
        } else {
            bonfire++;
        }
    })

    //Question 3
    
    $('#question3').on('submit', function (event) {

        event.preventDefault();

        const question3 = $('input[name=question3]:checked').val();

        const result = {};
        result.title = question3;
        result.question3Value = question3;
        results.push(result);
        
        const questionNumb = allQuestions[3].questionNumb;
        const question = allQuestions[3].question;

        $('.quiz4 h2').empty();
        $('.quiz4 h3').empty();

        $('.quiz4').css('opacity', '1');
        $('.quiz4 h2').append(questionNumb);
        $('.quiz4 h3').append(question); 

        if (question3 === 'sober') {
            sober++;
        } else if (question3 === 'thisIsAmerica') {
            thisIsAmerica++;
        } else if (question3 === 'redbone') {
            redbone++;
        } else if (question3 === 'three005') {
            three005++;
        } else {
            bonfire++;
        }
    })

    //Question 4

    $('#question4').on('submit', function (event) {

        event.preventDefault();

        const question4 = $('input[name=question4]:checked').val();
        const result = {};
        result.title = question4;
        result.question4Value = question4;
        results.push(result);

        const questionNumb = allQuestions[4].questionNumb;
        const question = allQuestions[4].question;
        
        $('.quiz5 h2').empty();
        $('.quiz5 h3').empty();

        $('.quiz5').css('opacity', '1');
        $('.quiz5 h2').append(questionNumb);
        $('.quiz5 h3').append(question);

        if (question4 === 'sober') {
            sober++;
        } else if (question4 === 'thisIsAmerica') {
            thisIsAmerica++;
        } else if (question4 === 'redbone') {
            redbone++;
        } else if (question4 === 'three005') {
            three005++;
        } else {
            bonfire++;
        }
    })

    //Question 5

    $('#question5').on('submit', function (event) {

        event.preventDefault();
        $('.songTitleResult').empty();

        const question5 = $('input[name=question5]:checked').val();
        const result = {};
        result.title = question5;
        result.question5Value = question5;
        results.push(result);

        if (question5 === 'sober') {
            sober++;
        } else if (question5 === 'thisIsAmerica') {
            thisIsAmerica++;
        } else if (question5 === 'redbone') {
            redbone++;
        } else if (question5 === 'three005') {
            three005++;
        } else {
            bonfire++;
        }

        // created an if/else statement to show for results, whichever total value gets selected the most will display. need to create a tie if else statement

        if (sober > thisIsAmerica && sober > redbone && sober > three005 && sober > bonfire) {
            sober = 'Sober';
            $('.songTitleResult').append(`Your Childish Gambino Song is ${sober}`);
        } else if (thisIsAmerica > sober && thisIsAmerica > redbone && thisIsAmerica > three005 && thisIsAmerica > bonfire) {
            thisIsAmerica = 'This Is America';
            $('.songTitleResult').append(`Your Childish Gambino Song is ${thisIsAmerica}`);
        } else if (redbone > thisIsAmerica && redbone > sober && redbone > bonfire && redbone > three005) {
            redbone = 'Redbone';
            $('.songTitleResult').append(`Your Childish Gambino Song is ${redbone}`);
        } else if (three005 > thisIsAmerica && three005 > sober && three005 > bonfire && three005 > redbone) {
            three005 = '3005';
            $('.songTitleResult').append(`Your Childish Gambino Song is ${three005}`);
        } else {
            bonfire = 'Bonfire';
            $('.songTitleResult').append(`Your Childish Gambino Song is ${bonfire}`);
        }

        console.log(sober, thisIsAmerica, redbone, bonfire, three005);
    })

    // restart button to hard refresh the page and allow the user to take the quiz again
    $("#restart").on('click', function (event) {
        event.preventDefault();
        location.reload(true);
    });
});



