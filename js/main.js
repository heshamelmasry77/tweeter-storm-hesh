var button = document.querySelector("#make-readable");

button.addEventListener("click", function () {
    //to make the screen go top
    scroll(0,0);
    var mainTweetSource = document.querySelector("#main-tweet-template").innerText;
    var mainTweetTemplate = Handlebars.compile(mainTweetSource);
    
    var subTweetSource = document.querySelector("#sub-tweet-template").innerText;
    var subTweetTemplate = Handlebars.compile(subTweetSource);
    
    var content = document.querySelector("#text").textContent;
    // my regular expression to break up the sentence
    var contentArray = content.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
    
    var allSubtweets = "";
    //main tweet data
    var mainTweetData = {
        "user-fullname": "Hesham El Masry",
        "user-username": "@somefan",
        "tweet-text": contentArray.shift(),
        "tweet-time": "5:48 PM - 15 Sep 2017",
        "comments": contentArray.length + 1,
        "retweets": Math.floor(Math.random() * 100),
        "loves": Math.floor(Math.random() * 200),
        "tweet-number": 1,
        "tweet-total": contentArray.length + 1
    };
    //inject the main tweet
    var mainTweetHtml = mainTweetTemplate(mainTweetData);
    //looping on every tweet
    contentArray.forEach(function (sentence, i) {
        var subtweetData = {
            "user-fullname": "Hesham El Masry",
            "user-username": "@somefan",
            "tweet-text": sentence,
            "retweets": Math.floor(Math.random() * 50),
            "loves": Math.floor(Math.random() * 50),
            "tweet-number": i + 2,
            "tweet-total": contentArray.length + 1
        };
        //inject the result data to my variable
        allSubtweets += subTweetTemplate(subtweetData);
    });
    
    document.querySelector("#content").innerHTML = "\n    <div class=\"all-tweets-container\">\n      " + mainTweetHtml + "\n      " + allSubtweets + "\n    </div>\n  ";
    
    document.body.classList.add("ready-to-read-now");
    //main text
    content.remove();
    //removing btn
    button.remove();
});
