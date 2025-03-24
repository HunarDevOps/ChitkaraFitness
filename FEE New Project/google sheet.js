const scriptURL = 'https://script.googleusercontent.com/macros/echo?user_content_key=wJjXEFQMyIK_f-iXzSjnMnLdUtA7PoSqUeo-Y6LJkiIhh1Km6qAtZBqcTQTQtfxAdkMDgRAYPZxIlZMerSiBQN44tWm8z0H3m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGSmOXuWnyxBC6X9X8B4PIAT5uoCB1DsuT-HUB11MfN8H88uP_Q5ygenwYUR1ylI2aMeidlxKTM8ZUSFRbh-AJorwZEz6QX0Gdz9Jw9Md8uu&lib=M9zJAE9haOfrk2n8YdAAW6br-RBH74-_F';
const form = document.forms['gymform'];

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form),
    })
        .then((response) => {
            if (response.ok) {
                alert("Your form has been submitted successfully."); // Show success popup
                form.reset(); // Reset the form
            } else {
                throw new Error("Submission failed");
            }
        })
        .catch((error) => {
            console.error('Error!', error.message); // Log any errors
            alert("There was an error submitting your form. Please try again.");
        });
});


