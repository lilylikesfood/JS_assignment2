const wishForm= document.getElementById("wishForm")
const wishInput= document.getElementById("wishInput")
const wishList= document.getElementById("wishList")

// Add wish
wishForm.addEventListener("submit", (sub)=>{
    // Prevents the default form submission behavior.
    sub.preventDefault();
    
    // Gets the value of the input field.
    const wishText= wishInput.value.trim();
    if(wishText === ""){
        alert("Please enter a wish!");
        return;
    }

    // Creates a new list item (<li>) with the wish.
    let newWish= document.createElement("li")
    newWish.textContent= wishText;

    // Adds the new item to the wish list.
    wishList.appendChild(newWish);

    // Clear the Input Field
    wishInput.value="";

    // Create remove button
    const removeButton= document.createElement("button")
    removeButton.textContent= "Remove";
    newWish.appendChild(removeButton);

    // Add class for my newly remove button
    removeButton.classList.add("remove-btn");

    // Remove wish
    removeButton.addEventListener("click", ()=>{
        newWish.remove();
    })
})

// Asynchronous operations using Promises
function fetchMessage(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const fetch= Math.random()> 0.1;
        
                if(fetch){
                    resolve("“Dream big and dare to fail.” - Norman Vaughan");
                }else{
                    reject("Failed to fetch message.");
                }
            }, 2000);  // Simulate a 2-second delay
        });
}

// Get inspirational quote button click and display 
const inspirationalQuoteButton= document.getElementById("inspirationalQuoteButton")
const quoteDisplay= document.getElementById("quoteDisplay")
inspirationalQuoteButton.addEventListener("click", ()=>{
    fetchWithAsync()
    // fetchWithAsync()
    // .then((result)=>{
    //     quoteDisplay.textContent= result
    // })
    // .catch((error)=>{
    //     quoteDisplay.textContent= error
    // });
})

// async/await function
async function fetchWithAsync() {
    try{
        quoteDisplay.textContent= "Loading message..."; 
        let result= await fetchMessage(); 
        quoteDisplay.textContent= result;
    } catch(error){
        console.error(error);
        quoteDisplay.textContent= "Could not fetch a message. Please try again later.";
    }
}
