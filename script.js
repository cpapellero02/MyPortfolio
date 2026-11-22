
// MAIN LOBBY
const lobby = document.querySelector(".lobby");

// MISSION DETAILS
const missionDetailsPanel = document.getElementById("mission-details-panel");
const missionDetailsClose = document.getElementById("mission-details-close");

const missionDetailsTitle = document.getElementById("mission-details-title");
const missionDetailsCode = document.getElementById("mission-details-code");
const missionDetailsName = document.getElementById("mission-details-name");
const missionDetailsDescription = document.getElementById("mission-details-description");
const missionDetailsStatus = document.getElementById("mission-details-status");

const missionDetailsTech = document.getElementById("mission-details-tech");
const missionDetailsObjectives = document.getElementById("mission-details-objectives");

// LOADOUT
const loadoutButton = document.getElementById("loadout-btn");
const loadoutPanel = document.getElementById("loadout-panel");
const closeLoadoutButton = document.getElementById("loadout-close");

// MISSIONS
const missionsButton = document.getElementById("missions-btn");
const missionsPanel = document.getElementById("missions-panel");
const closeMissionsButton = document.getElementById("missions-close");

// COMMS
const commsButton = document.getElementById("comms-btn");
const commsPanel = document.getElementById("comms-panel");
const closeCommsButton = document.getElementById("comms-close");

// DEPLOY
const deployButton = document.getElementById("deploy-btn");
const deployPanel = document.getElementById("deploy-panel");
const closeDeployButton = document.getElementById("deploy-close");
const returnButton = document.getElementById("return-btn");

// PROFILE
const profilePanel = document.getElementById("profile-panel");
const closeProfileButton = document.getElementById("profile-close");


// CLOSE ALL PANELS
function closeAllPanels() {
    loadoutPanel.classList.remove("open");
    missionsPanel.classList.remove("open");
    commsPanel.classList.remove("open");
    deployPanel.classList.remove("open");
    profilePanel.classList.remove("open");
    missionDetailsPanel.classList.remove("open");

    lobby.classList.remove("loadout-active");

    loadoutPanel.setAttribute("aria-hidden", "true");
    missionsPanel.setAttribute("aria-hidden", "true");
    commsPanel.setAttribute("aria-hidden", "true");
    deployPanel.setAttribute("aria-hidden", "true");
    profilePanel.setAttribute("aria-hidden", "true");
    missionDetailsPanel.setAttribute("aria-hidden", "true");
}


// OPEN LOADOUT
function openLoadout() {
    closeAllPanels();

    loadoutPanel.classList.add("open");
    lobby.classList.add("loadout-active");

    loadoutPanel.setAttribute("aria-hidden", "false");
}


// OPEN MISSIONS
function openMissions() {
    closeAllPanels();

    missionsPanel.classList.add("open");
    lobby.classList.add("loadout-active");

    missionsPanel.setAttribute("aria-hidden", "false");
}


// OPEN COMMS
function openComms() {
    closeAllPanels();

    commsPanel.classList.add("open");
    lobby.classList.add("loadout-active");

    commsPanel.setAttribute("aria-hidden", "false");
}


// OPEN DEPLOY
function openDeploy() {
    closeAllPanels();

    deployPanel.classList.add("open");
    deployPanel.setAttribute("aria-hidden", "false");
}


// OPEN PROFILE
function openProfile() {
    closeAllPanels();

    profilePanel.classList.add("open");
    profilePanel.setAttribute("aria-hidden", "false");
}


// BUTTON EVENT LISTENERS

loadoutButton.addEventListener("click", openLoadout);
closeLoadoutButton.addEventListener("click", closeAllPanels);

missionsButton.addEventListener("click", openMissions);
closeMissionsButton.addEventListener("click", closeAllPanels);

commsButton.addEventListener("click", openComms);
closeCommsButton.addEventListener("click", closeAllPanels);

deployButton.addEventListener("click", openDeploy);
closeDeployButton.addEventListener("click", closeAllPanels);
returnButton.addEventListener("click", closeAllPanels);

closeProfileButton.addEventListener("click", closeAllPanels);
missionDetailsClose.addEventListener("click", closeAllPanels);


// ESCAPE KEY
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeAllPanels();
    }
});


// TOP NAVIGATION

const navLinks = document.querySelectorAll("[data-nav]");

navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const destination = this.dataset.nav;

        // UPDATE ACTIVE NAVIGATION
        navLinks.forEach(nav => {
            nav.classList.remove("active");
        });

        this.classList.add("active");

        switch(destination) {
            case "home":
                closeAllPanels();
                break;

            case "profile":
                openProfile();
                break;

            case "skills":
                openLoadout();
                break;

            case "projects":
                openMissions();
                break;

            case "contact":
                openComms();
                break;
        }
    });
});


// MISSION INSPECTION SYSTEM

const inspectButtons = document.querySelectorAll(
    ".inspect-button:not(.locked-button)"
);


// PROJECT DATABASE

const missionData = [
    {
        code: "MISSION 001",
        name: "DinaPOS",

        description: "A web-based point-of-sale system designed for sari-sari store sales, customer debts, and daily sales monitoring.",

        status: "IN DEVELOPMENT",

        technologies: [
            "ASP.NET CORE",
            "C#",
            "SQL SERVER",
            "ENTITY FRAMEWORK"
        ],

        objectives: [
            "Record daily sari-sari store sales.",
            "Monitor customer debts and payments.",
            "Compare daily, weekly, monthly, and yearly sales.",
            "Track products purchased by customers.",
            "Provide a simple interface for store operations."
        ]
    },

    {
        code: "MISSION 002",
        name: "CCSResearchHub",

        description: "An academic research management system designed to manage capstone submissions, advisers, presentation schedules, panel evaluations, and results.",

        status: "ACADEMIC PROJECT",

        technologies: [
            "ASP.NET CORE MVC",
            "C#",
            "EF CORE",
            "SQL SERVER"
        ],

        objectives: [
            "Manage student capstone submissions.",
            "Organize advisers and panelists.",
            "Schedule presentations and defenses.",
            "Manage panel evaluations and rubric scoring.",
            "Generate presentation results and records."
        ]
    }
];


// OPEN MISSION DETAILS

function openMissionDetails(index) {
    const mission = missionData[index];

    // SAFETY CHECK
    if (!mission) return;

    // CLOSE OTHER PANELS
    closeAllPanels();

    // UPDATE PROJECT INFORMATION
    missionDetailsTitle.textContent = mission.name.toUpperCase();
    missionDetailsCode.textContent = mission.code;
    missionDetailsName.textContent = mission.name;
    missionDetailsDescription.textContent = mission.description;
    missionDetailsStatus.textContent = mission.status;

    // CLEAR PREVIOUS INFORMATION
    missionDetailsTech.innerHTML = "";
    missionDetailsObjectives.innerHTML = "";

    // DISPLAY TECHNOLOGIES
    mission.technologies.forEach(technology => {
        const techTag = document.createElement("span");

        techTag.textContent = technology;

        missionDetailsTech.appendChild(techTag);
    });

    // DISPLAY OBJECTIVES
    mission.objectives.forEach(objective => {
        const listItem = document.createElement("li");

        listItem.textContent = objective;

        missionDetailsObjectives.appendChild(listItem);
    });

    // SHOW DETAILS PANEL
    missionDetailsPanel.classList.add("open");
    missionDetailsPanel.setAttribute("aria-hidden", "false");

    lobby.classList.add("loadout-active");
}


// CONNECT INSPECT BUTTONS TO PROJECTS

inspectButtons.forEach((button, index) => {
    button.addEventListener("click", function() {
        openMissionDetails(index);
    });
});
