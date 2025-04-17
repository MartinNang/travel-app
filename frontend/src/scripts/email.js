(function() {
    
    emailjs.init("Wrr2nz10a-IwnQeAo"); 

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const serviceID = "service_prq9bh8";
    const templateID = "template_wrkabh7";

  
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert("Message sent successfully!");
          
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please check your email is correct.");
        });
});

