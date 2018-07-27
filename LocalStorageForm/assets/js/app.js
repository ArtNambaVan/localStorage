// Variables ///////////////////////////////////////
const tweetList = document.getElementById('tweet-list');

// Event Listeners /////////////////////////////////
eventListener()
function eventListener() {

    // Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);

    //REmove tweet from the list
    tweetList.addEventListener('click', removeTweet);

    //Document
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}

// Functions ////////////////////////////////////////
function newTweet(e) {
    e.preventDefault();

    // Read the textarea value
    const tweet = document.getElementById('tweet').value;

    // create the remove btn
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    // create li element
    const li = document.createElement('li');
    li.textContent = tweet;

    // Add the remove button to each tweet
    li.appendChild(removeBtn);

    // Add to the list
    tweetList.appendChild(li);

    addTweetLocalStorage(tweet);

}

function removeTweet(e) {
    if (e.target.classList.contains( 'remove-tweet' ) ) {
        e.target.parentElement.remove();
    }
}


// add tweet into LOCAL STORAGE

function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    // Add the tweet into the array
    tweets.push(tweet);

    // Convert tweet array into String
    localStorage.setItem('tweets', JSON.stringify(tweets) )
}

function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem( 'tweets' );

    //Get the values, if null is returned then we create an empty array
    if ( tweetsLS === null ) {
        tweets = []
    } else {
        tweets = JSON.parse( tweetsLS );
    }
    return tweets;
}

// Print local storage tweeets on load

function localStorageOnLoad() {
    let tweets = getTweetsFromStorage();

    // loop throught storage and then print the values
    tweets.forEach(function(tweet) {

        // create the remove btn
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';

        // create li element
        const li = document.createElement('li');
        li.textContent = tweet;

        // Add the remove button to each tweet
        li.appendChild(removeBtn);

        // Add to the list
        tweetList.appendChild(li);

    })
}
