"use client"

const copyUserId = () => {
    const userIdElement = document.getElementById("userId"); // Get the element containing the user ID
    const userId = userIdElement.innerText; // Get the text content of the element
    navigator.clipboard.writeText(userId); // Copy the text to the clipboard
    alert("ID copied to clipboard: " + userId);
};

export default copyUserId;