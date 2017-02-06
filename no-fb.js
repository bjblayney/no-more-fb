var myTimeOut;
var myOverlay = '<div id="no-fb-please"><h1>Are you sure you <em>want</em> to be <strong>here</strong>?</h1><p><a href="javascript:;" class="NFBclose">Yeah, I\'ll stay for a bit.</a></p><p><a href="javascript:;" class="NFBaway">Nope, what else is out there?</a></p></div>'
var links = [
    "redditblog.com",
    "google.com/doodles",
    "youtube.com",
    "notey.com",
    "futurelearn.com",
    "whattheysee.tumblr.com",
    "medium.com",
    "pixelthoughts.co"
];


NFB = function () {
    myTimeOut = setTimeout(NFBshow, 15000);
}

NFBshow = function () {
    $('#no-fb-please').fadeIn();
}

NFBclose = function () {
    $('#no-fb-please').fadeOut();
}

NFBaway = function () {
    // get a random number between 0 and the number of links
    var randIdx = Math.random() * links.length;
    // round it, so it can be used as array index
    randIdx = parseInt(randIdx, 10);
    // construct the link to be opened
    var link = 'https://' + links[randIdx];
    // open it in a new window / tab (depends on browser setting)
    window.open(link);
}

$(function() {
    $('body').append(myOverlay);
    NFB();
    $('.NFBclose').on('click',function(){
        NFBclose();
    });
    $('.NFBaway').on('click',function(){
        NFBaway();
    });
});
