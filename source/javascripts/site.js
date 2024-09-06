// This is where it all goes :)
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.link');

  links.forEach(link => {
    const url = link.dataset.url;

    // Check if the link is reachable
    fetch(url, { method: 'HEAD' })
      .then(response => {
        if (!response.ok) {
          link.classList.add('offline');
        }
      })
      .catch(error => {
        // If there's a fetch error (like network issues), mark it offline
        link.classList.add('offline');
      });
  });
});
