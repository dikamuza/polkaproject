// totalproject.js

document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch project data from manage-post-project.html
    function fetchProjectData() {
        // Check if project data is available in localStorage
        let projects = JSON.parse(localStorage.getItem('projects')) || [];
        return projects;
    }

    // Function to update the statistics on the dashboard
    function updateStatistics() {
        let projects = fetchProjectData();
        let totalProjects = 0;
        let totalPBL = 0;

        // Count projects and PBLs based on their category
        projects.forEach(project => {
            if (project.kategori === 'Project Mahasiswa') {
                totalProjects++;
            }
            if (project.kategori === 'Project PBL') {
                totalPBL++;
            }
        });

        // Update the dashboard with the counts
        document.getElementById('total-project').textContent = totalProjects;
        document.getElementById('total-pbl').textContent = totalPBL;
    }

    // Call the updateStatistics function when the page loads
    updateStatistics();
});
