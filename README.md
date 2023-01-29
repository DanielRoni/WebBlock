# WebBlock
 A web game, upload your js code and view it on a map of uploded code/ anything else
 
The idea of the game is to have a map, of uploded content, from developers self-wiritten code, compeny code, ads, teams who uploded games etc.
You will define your own border, an area on a div, which you will upload your js code, that will run on the div's <script> tag.
A website with a huge map you can scroll and view through with uploded and working content/code
  
* I do not want the files to be permenently saved, thus i do not want to have a data base. I am currently using the local-storage on chrome, to store the 
  div's location on the webpage, id, and it's <script> tag id
  this is because i dont want to make an account system, i want this to be more of a 'free' website
  
can be a very cool concept - but i am missing out on some code:
 
  - file upload system, where you can save your uploded file code somewhere
  - php knowladge
  - code securiry
  

you can download the code and see the idea on itself, the code does not include that much but for me it was a start
  will gladly take ideas, code, suggestions and offers
  
# Download

download the package and extract it, open it in VSC and run it in Live Server

if the code shows some errors, add the following lines to the main.js file( in the first - 9th row) -
-------
window.localStorage.setItem('block', JSON.stringify(excBlockContainer));
excBlockContainer  = JSON.parse(window.localStorage.getItem('block'));
-------

  
  Thanks!
