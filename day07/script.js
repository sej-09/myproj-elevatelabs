const container = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

async function fetchUsers() {
    container.innerHTML = "Loading...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const users = await response.json();

        container.innerHTML = "";

        users.forEach(user => {
            const div = document.createElement("div");
            div.classList.add("userCard");

            div.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        container.innerHTML = "Error fetching data. Please check your internet connection.";
        console.error(error);
    }
}

reloadBtn.addEventListener("click", fetchUsers);

// Load data automatically when page loads
fetchUsers();