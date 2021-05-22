
//Declaring variables from html and new ones
const NameInput = document.getElementById("Name");
const EmailInput = document.getElementById("Email");
const CommentInput = document.getElementById("comment");
const cardDisplay1 = document.getElementById("card1");
const saveBtn = document.getElementById("saveBtn");
const commentContainer = document.getElementById ("Commentcards");


//Adding ELements and attributes

const cardHeaderDiv1 = document.createElement("div");
cardHeaderDiv1.classList.add("card-header");
const HeaderMessage1 = document.createElement("h6")
HeaderMessage1.innerHTML="Mario Sharon";
cardHeaderDiv1.appendChild(HeaderMessage1)
cardDisplay1.appendChild(cardHeaderDiv1);
console.log(HeaderMessage1);
const cardBodyDiv1 = document.createElement("div");
cardBodyDiv1.classList.add("card-body");

const cardTextDiv1 = document.createElement("div");
cardTextDiv1.classList.add("card-Text");
const ReviewMessage1= document.createElement("p")
console.log(ReviewMessage1);
ReviewMessage1.innerHTML= "Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API frame";
cardTextDiv1.appendChild(ReviewMessage1)
cardBodyDiv1.appendChild(cardTextDiv1);

cardDisplay1.appendChild(cardBodyDiv1);
commentContainer.appendChild(cardDisplay1);

//Removing paragraph from the DOM on clicking
cardDisplay1.addEventListener("click", (e)=>{
    ReviewMessage1.remove();
});

//Adding reviews from the web browser after clicking the save button

saveBtn.addEventListener("click", (e)=>{
    event.preventDefault();

const NameinputElementValue = NameInput.value; 
const EmailinputElementValue = EmailInput.value; 
const CommentinputElementValue = CommentInput.value; 

const cardDisplay = document.createElement("div");
cardDisplay.classList.add("card", "mt-5");

const cardHeaderDiv= document.createElement("div");
cardHeaderDiv.classList.add("card-header");

const HeaderMessage= document.createElement("h6");
HeaderMessage.innerHTML=NameinputElementValue;
NameInput.Value = "";
cardHeaderDiv.appendChild(HeaderMessage);
cardDisplay.appendChild(cardHeaderDiv);

const cardBodyDiv = document.createElement("div");
cardBodyDiv.classList.add("card-body");

const cardTextDiv = document.createElement("div");
cardTextDiv.classList.add("card-Text");
const ReviewMessage= document.createElement("p")
ReviewMessage.innerHTML=CommentinputElementValue;

cardTextDiv.appendChild(ReviewMessage);
cardBodyDiv.appendChild(cardTextDiv);
cardDisplay.appendChild(cardBodyDiv);
commentContainer.appendChild(cardDisplay);

// This keeps the fields blank after saving

NameInput.value="";
EmailInput.value="";
CommentInput.value="";


});




