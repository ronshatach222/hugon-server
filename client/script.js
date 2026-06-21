console.log("script loaded");

async function loadPlayers() {
    try {
        const response = await fetch("http://localhost:6969/players");

        const players = await response.json();

        const playersList = document.getElementById("playersList");

        playersList.innerHTML = "";

        for (const player of players) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${player.name}</td>
            `;

            playersList.appendChild(row);
        }

    } catch (error) {
        console.error("ERROR:", error);
    }
}

loadPlayers();

const createPlayerBtn = document.getElementById("createPlayerBtn");
const createPlayerModal = document.getElementById("createPlayerModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const savePlayerBtn = document.getElementById("savePlayerBtn");

createPlayerBtn.addEventListener("click", () => {
    createPlayerModal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    createPlayerModal.style.display = "none";
});

savePlayerBtn.addEventListener("click", async () => {
    const playerNameInput = document.getElementById("modalPlayerNameInput");

    await fetch("http://localhost:6969/players", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: playerNameInput.value
        })
    });

    playerNameInput.value = "";

    createPlayerModal.style.display = "none";

    loadPlayers();
});
const playersTabBtn = document.getElementById("playersTabBtn");
const pacifierBtn = document.getElementById("pacifierBtn");

const playersTab = document.getElementById("playersTab");
const pacifierTab = document.getElementById("pacifierTab");

playersTabBtn.addEventListener("click", () => {
    playersTab.style.display = "block";
    pacifierTab.style.display = "none";
});

pacifierBtn.addEventListener("click", () => {
    playersTab.style.display = "none";
    pacifierTab.style.display = "block";
});