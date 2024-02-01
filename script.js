// Sample job data
const jobs = [
    { title: 'Software Engineer', company: 'ABC Corp', location: 'New York, NY' },
    { title: 'Marketing Manager', company: 'XYZ Inc', location: 'Los Angeles, CA' },
    { title: 'software Engineer Intern', company: 'Bloomberg', location: 'UK'}
];

// Function to display job listings
function displayJobListings() {
    const jobListings = document.getElementById('jobListings');
    jobListings.innerHTML = ''; // Clear previous listings

    jobs.forEach(job => {
        const jobListing = document.createElement('div');
        jobListing.classList.add('jobListing');
        jobListing.innerHTML = `
            <h2>${job.title}</h2>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
        `;
        jobListings.appendChild(jobListing);
    });
}

// Event listener for displaying job listings
window.addEventListener('DOMContentLoaded', displayJobListings);

// Event listener for "Post a Job" button
document.getElementById('postJobBtn').addEventListener('click', () => {
    alert('Functionality to post a job is not implemented in this demo.');
});
