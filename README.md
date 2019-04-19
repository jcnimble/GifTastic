# GifTastic
Homework Assignment
I used a lot of the activities we did in class to complete this assignment -- which is what I liked.  I didn't have to go searching for random code pieces that I wasn't really familiar with.  This really reinforced the learning in class.

I started with the activity that had movie quotes and actors using the Giphy API. I wanted to make sure my API key worked. Then I experimented with different searches. I decided on doing "Epic Fails" in honor of my Bootcamp experience thus far.  I wanted all the gifs pulled to be fails in different categories. So I built in "fail+" in the search line of the queryURL. So the user would just be typing in a category and within the category it would only be fails.

I followed the movie button solution very closely.  Maybe a little too closely because I was struggling to get it to pull back results from Giphy. I had to go back and adjust how I was storing the data from Ajax.  I did get that working.

Next, I had to go back and get the images to animate.  I totally understood the activity on how to do this, but couldn't get it to work. I became very comfortable with the jQuery that would add attributes to images which was key to this exercise.  I couldn't get it to even register a click on the image.  I tried putting it in different sections -- no luck.

I met with Aaron and discovered the way it was loading -- it wasn't having the opportunity to recognize the images could be clicked. So we added a function wouldn't just read the click, but wait for the gifs to load and then listen for the click.  Once that was in place, I was easily able to add the code for animate and still.  I have to double click to get animation started.  Not a complete win.

I wan't super inspired with the CSS on this one. I was glad I got to put an image in the Jumbotron. I have tried it before with no success.  I liked styling the buttons. I learned to use text transform to capitalize the button titles.  I got the images to run side by side.  But, it gets wonky sometimes. Some of the gifs are odd shapes and sizes. I was able to get them to fit within a column and reduce if necessary. I don't think I was completely successful on that.

Per Aaron's documentation if put a document ready fuction wrapped around everything in javascript. I  still feel like loading could be imrpoved.

Overall, a good homework that reflected the learning in class.
