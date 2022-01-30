var chosenPoss; // the possum the randomizer chooses, global variable
        
        window.onload = randomPoss; // possum randomizer function on page load
        
        // All the possum images as convenient variables
        var hungryPoss = "images/hungry_possum.png";
        var sleepyPoss = "images/sleepy_possum.png";
        var lonelyPoss = "images/possum_wants_friend.png"
        var happyPoss = "images/happy_possum.png";
        var neutralPoss = "images/neutral_possum.png";
        var angryPoss = "images/angry_possum.png";
        var confusedPoss ="images/confused_possum.png";
        
        // Creates array of possible random possums to appear when page loads 
        var possumInitial = new Array(hungryPoss, sleepyPoss, lonelyPoss, happyPoss);
        
        // Possum randomizer
        function randomPoss() {
            var randomNum = Math.floor(Math.random() * possumInitial.length); // random number * array length, converted to integer
            chosenPoss = possumInitial[randomNum]; // records which possum is chosen
            document.getElementById("randomPossum").src = chosenPoss; // displays chosen possum
        } ;
        
            // When the "feed me" button is pressed    

        document.getElementById("feed").onclick = function() {
            if (chosenPoss == hungryPoss) { // Option is appropriate
                document.getElementById("randomPossum").src = happyPoss; // Displays happy possum pic
                document.getElementById("message").innerHTML = "Yay, the possum is happy!"; // Success message
                chosenPoss = happyPoss; // sets the initial possum as happy in case more buttons are pressed
            }

            else if (chosenPoss == happyPoss) { // Option isn't appropriate but possum started off happy
                document.getElementById("randomPossum").src = confusedPoss; // Displays confused possum pic
                document.getElementById("message").innerHTML = "Hmm, the possum seems confused."; // Confused message
                chosenPoss = confusedPoss; // Sets initial possum as confused in case more buttons are pressed
            }

            else { // Option isn't appropriate
                document.getElementById("randomPossum").src = angryPoss; // Displays angry possum pic
                document.getElementById("message").innerHTML = "The possum doesn't want that!"; //Failure message
                chosenPoss = neutralPoss; // Sets initial possum as neutral in case more buttons are pressed
                document.getElementById("refresh").style.display = "inline-block"; // presents "try again" button
            };
        };

         // When the "tuck me in" button is pressed    

        document.getElementById("sleepy").onclick = function() {
            if (chosenPoss == sleepyPoss) { // Option is appropriate
                document.getElementById("randomPossum").src = happyPoss; // Displays happy possum pic
                document.getElementById("message").innerHTML = "Yay, the possum is happy!"; // Success message
                chosenPoss = happyPoss; // sets the initial possum as happy in case more buttons are pressed
            }

            else if (chosenPoss == happyPoss) { // Option isn't appropriate but possum started off happy
                document.getElementById("randomPossum").src = confusedPoss; // Displays confused possum pic
                document.getElementById("message").innerHTML = "Hmm, the possum seems confused."; // Confused message
                chosenPoss = confusedPoss; // Sets initial possum as confused in case more buttons are pressed
            }

            else { // Option isn't appropriate
                document.getElementById("randomPossum").src = angryPoss; // Displays angry possum pic
                document.getElementById("message").innerHTML = "Uh oh. Back away slowly."; //Failure message
                chosenPoss = neutralPoss; // Sets initial possum as neutral in case more buttons are pressed
                document.getElementById("refresh").style.display = "inline-block"; // presents "try again" button
            };
        };
        
         // When the "gimme friend" button is pressed    

        document.getElementById("friend").onclick = function() {
            if (chosenPoss == lonelyPoss) { // Option is appropriate
                document.getElementById("randomPossum").src = happyPoss; // Displays happy possum pic
                document.getElementById("message").innerHTML = "Yay, the possum is happy!"; // Success message
                chosenPoss = happyPoss; // sets the initial possum as happy in case more buttons are pressed
            }

            else if (chosenPoss == happyPoss) { // Option isn't appropriate but possum started off happy
                document.getElementById("randomPossum").src = confusedPoss; // Displays confused possum pic
                document.getElementById("message").innerHTML = "Hmm, the possum seems confused. Why are there more possums?"; // Confused message
                chosenPoss = confusedPoss; // Sets initial possum as confused in case more buttons are pressed
            }

            else { // Option isn't appropriate
                document.getElementById("randomPossum").src = angryPoss; // Displays angry possum pic
                document.getElementById("message").innerHTML = "No! The possum wants your sole attention."; //Failure message
                chosenPoss = neutralPoss; // Sets initial possum as neutral in case more buttons are pressed
                document.getElementById("refresh").style.display = "inline-block"; // presents "try again" button
            };
        };
        
         // When the "pet me" button is pressed    

        document.getElementById("pet").onclick = function() {
            if (chosenPoss == happyPoss) { // Option is appropriate, possum will stay happy
                document.getElementById("message").innerHTML = "Yay, the possum is happy!"; // Success message
            }

            else { // Option isn't appropriate
                document.getElementById("randomPossum").src = angryPoss; // Displays angry possum pic
                document.getElementById("message").innerHTML = "Uh oh. You probably shouldn't have done that. Back away slowly."; //Failure message
                chosenPoss = neutralPoss; // Sets initial possum as neutral in case more buttons are pressed
                document.getElementById("refresh").style.display = "inline-block"; // presents "try again" button
            };
        };
        
     // Resetting the possum
    
        document.getElementById("refresh").onclick = function () { 
            randomPoss();   // refreshes possum when "try again" is pressed
            document.getElementById("message").innerHTML = ""; // removes message after possum is refreshed
            document.getElementById("refresh").style.display= "none";
        };
