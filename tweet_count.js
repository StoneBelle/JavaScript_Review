// Create a input for a user's tweet
let myTweet = prompt("Enter your tweet:")
let tweetSize = myTweet.length 


// Check if user's tweet is <= or > 100 chars
if (tweetSize<= 100){
    alert("Your tweet is within the limit. \n\n" + myTweet);
} else {
    // If tweet is > 100 chars, inform user of # of chars over
    let myDiff = tweetSize - 100
    alert("Your tweet is over the limit by: " + myDiff.toString() + " characters. \n\n" + myTweet.slice(0, 100));
}

// Display allowed tweet
