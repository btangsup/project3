

$(document).ready(function(){
    
    console.log("oven is ready");

    $('.startQuizBtn').on("click", function (){
        console.log('Im being clicked');

    })

    $('form').on('submit', function (event) {

        //prevent default
        event.preventDefault();
        console.log('submitted');

        //capture user input for a question
        const question1 = $('input[name=question1]:checked').val();
        console.log(question);



    })




    // question radio input

    // questions data base

    const questions = [
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

    console.log(questions);





    // capture user data from the radio buttons, and store it as a variable

    // 

    
    
    
    //results 

    // const redbone = a;
    // const three005 = b;
    // const bonfire = c;
    // const sober = d;
    // const thisIsAmerica = e;

    const results = [
        {
            title: "Redbone",
            lyrics: "My peanut butter chocolate cake with kool-aid"
        },
        {
            title: "3005",
            lyrics: "Girl why is you lyin, girl why you mufasa, ye micasa su casa"
        },
        {
            title: "Bonfire",
            lyrics: "asdasd"
        },
        {
            title: "Sober",
            lyrics: "And now that it's over, I'll never be sober, I couldn't believe. Now I'm so high."
        },

    ]
  
    // // clicking
    // $('.startQuizBtn').on("click", function () {
    //     console.log("clicking");
    // });
    
    // // prevent default 
  
            
    //     //get user inputs
    //     const userInput = $('input[name=question1]:checked').val();
    //     console.log(userInput);  
    
        
    
    // });
});





