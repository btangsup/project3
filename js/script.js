

    const results = [
        // {
            // title: "Redbone",
            // lyrics: "Too late, you wanna make it right but now its too late. My peanut butter chocolate cake with kool-aid. I'm trying not to waste my time..."
        // },
        // {
        //     title: "3005",
        //     lyrics: "Got no patience cause I'm not a doctor. Girl why is you lyin, girl why you Mufasa, ye micasa su casa, gotta strip it like Gaza. Got so high off volcanoes, now the flow is so lava..."
        // },
        // {
        //     title: "Bonfire",
        //     lyrics: "In Adidas with some short shorts, B - O - O all over me. My green is where it's supposed to be, your green is in my grocery. This Asian dude, I stole his girl, and now he got that Kogi beef. My **** is like an accent mark, it's all about the over Es..."
        // },
        // {
        //     title: "Sober",
        //     lyrics: "And now that it's over, I'll never be sober, I couldn't believe. Now I'm so high."
        // },
        // {
        //     title: "This is America",
        //     lyrics: "Look how I'm geekin, I'm so fitted. I'm on Gucci. I'm so pretty. I'm gon' get it. Watch me move. This a celly. That's a tool"
        // }
    ]

$('document').ready(function(){

    // interactive data to be placed when clicked on 

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
            questionImg: '../assets/questionImg1.jpg',
            altText: "Lion King Charcaters",
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
            questionImg: "../assets/questionImg2.png",
            altText: "Childish Gambino Eating Pencils"
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
            questionImg: "../assets/questionImg3.png",
            altText: "Childish gambino looking real surprised"
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
            questionImg: "../assets/questionImg4.jpg",
            altText: "Childish Gambino sitting with a teddy-bear on a ferris wheel"
        },
        {
            questionNumb: "Question 5",
            question: "What's music mood best describes you?",
            options: [
                "I'll rap while wrapping tortilla wraps", //bonfire
                "I infintely sound better when I sing in the shower", //redbone
                "Sitting by the fireplace leaning back while listening my jams", // This is America
                "I wanna dance, I wanna grove", // sober
                "Need to turn up!" // 3005
            ],
        },
    ];

    // start How Childish are you Quiz!!!

    // const sectionScroll = function(sectionName){
    //         $('html').animate({
    //             let section = $('<section>').first(),
    //             $('<section>').last().text("scrollTop:" + section.scrollTop()), 
    //         }, 'slow');
    // };

    $("#submit0").click(function () {
        $('html, .quiz1').animate({
            scrollTop: $(".quiz1").offset().top
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

        console.log(sober, thisIsAmerica, redbone, three005, bonfire);
        // $(".submit1").click(function () {
        //     sectionScroll("submit2");
        // });

        $("#submit1").click(function () {
            $('html, .quiz2').animate({
                scrollTop: $(".quiz2").offset().top
            }, 'slow');
        });

    })


    //Question 2
    
    $('#question2').on('submit', function (event) {

            event.preventDefault();

            const question2 = $('input[name=question2]:checked').val();

            const result = {};
            result.title = question2;
            result.question2Value = question2;
            results.push(result);
            console.log(results);


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
        console.log(sober, thisIsAmerica, redbone, three005, bonfire);

            $('#submit2').click(function (){
                $('html, .quiz3').animate({
                    scrollTop: $(".quiz3").offset().top
                }, 'slow');
            })
    })


    //Question 3
    
    $('#question3').on('submit', function (event) {

        event.preventDefault();

        const question3 = $('input[name=question3]:checked').val();

        const result = {};
        result.title = question3;
        result.question3Value = question3;
        results.push(result);
        console.log(results);
        

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
        console.log(sober, thisIsAmerica, redbone, three005, bonfire);

        $('#submit3').click(function () {
            $('html, .quiz4').animate({
                scrollTop: $(".quiz4").offset().top
            }, 'slow');
        })
    })


    //Question 4

    $('#question4').on('submit', function (event) {

        event.preventDefault();

        const question4 = $('input[name=question4]:checked').val();
        const result = {};
        result.title = question4;
        result.question4Value = question4;
        results.push(result);
        console.log(results);

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
        console.log(sober, thisIsAmerica, redbone, three005, bonfire);
        $('#submit4').click(function () {
            $('html, .quiz4').animate({
                scrollTop: $(".quiz4").offset().top
            }, 'slow');
        })
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
        console.log(results);

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

        console.log(sober, thisIsAmerica, redbone, three005, bonfire);

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
    })
    

    console.log(sober, thisIsAmerica, redbone, three005, bonfire);

});


