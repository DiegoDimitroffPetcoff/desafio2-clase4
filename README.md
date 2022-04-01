# desafio2-clase4
Working with JavaScrip. NodeJs. PackageJson. Class. Methods. WriteFileSync. 
Work done with Node Js.
Class creation with methods to save objects, assign an ID number as they are saved.
Creation of methods to find the saved objects by ID number.
Creation of a method to delete certain objects by ID number or also to delete all the saved objects.


1-First I create a Container class. I indicate the route that I am going to use later with the THIS
like this.route. I add a this.id to be able to initialize the first object that will be read
for the first time with the save(), (in this case I comment that I discovered that the class can be
initialized without variables, and that I can use THIS in any method whenever I want,
I thought that I always had to put the variables and that they had to be indicated
always like this.variable=variable)
2-I initialize a Container class with the new method to have it created.
3-I create three objects that I am going to use and to them I only add the names and the
price, without the ID since I add that to the save() method.
4- I create the save(x) method, I use the x because it seems more comfortable to me to recognize it as
variable (if it is not a good practice, please let me know teacher). I am going to send
as a parameter the entire object, which will be identified with the x and then I assign its
content to a let object to handle me in the save() method scout. I add the id that
I initially put in the class (this.id) that has a value of one and then increase it.
5- I learned to use the try or catch with this exercise (thanks to the example given by the teacher
when he solved the exercise in the last class). I generate a let data to assign the
reading of the readFile placing as route the this.route that you previously placed in the Container class.
All that will not be read in the first one since this route will not exist. The idea would be to create it.
I put a log "entry by try" to be able to recognize in the console reading when the TRY was activated.
At this point I put, first, the log one line before the readFile... and I realized that in this way
the TRY is activated until the part where the error appears and is deactivated when it occurs
Note that the read path does not exist. For this reason I put it after the readFileSync.
6- I generate the catch that is activated in the first call of save() since the
route this.route pointed to in the class. But you are going to create it as package.json.
7- I was placing a log of the array that I created before and after the push to see if they left
adding the elements as I wanted and everything worked fine. Also how to guide me
add a log "---" just to separate the different calls that were made
in the save(), they are not essential, that's why I leave them commented.
8- With the last log I made sure to see that the array is correctly pushed
with the new object I want and give it a writeFile to overwrite.
At this point I made a mistake and did not understand why it was saved, in package.json,
an array with the first object and a second array with the first and second objects
(and this happened only if I called save() twice, because if I called it more than
twice already they even gave me the id wrong). I realized that I was putting an addFile and
That is why the previously saved array was not deleted, so all the information was accumulated and mixed.
9- Finally I add a this.id++ modifying the this.id so that in the next round
this is worth 2, and in the next 3 and so on.
