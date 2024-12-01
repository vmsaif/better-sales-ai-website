document.addEventListener("DOMContentLoaded", function () {
  function loadComponent(containerId, url) {
    const container = document.getElementById(containerId);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          // try again with ../
          fetch(`../${url}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Failed to load ${containerId}`);
              }
              return response.text();
            })
            .then((data) => {
              container.innerHTML = data;
            })
            .catch((error) => {
              console.error(`Error loading ${containerId}:`, error);
            }
          );
        }
        return response.text();
      })
      .then((data) => {
        container.innerHTML = data;
      })
      .catch((error) => {
        console.error(`Error loading ${containerId}:`, error);
      });
  }

  loadComponent("myNavbar", "components/navbar.html");
  loadComponent("myFooter", "components/footer.html");
  loadComponent("myAbout", "pages/about.html");
  // loadComponent("myBlog-details", "pages/blog-details.html");
  // loadComponent("myBlog", "pages/blog.html");
  loadComponent("myContact", "pages/contact.html");
  // loadComponent("myLogin", "pages/login.html");
  loadComponent("myPricing", "pages/pricing.html");
  loadComponent("myTeam", "components/team.html");
  loadComponent("myWaitlist", "pages/waitlist.html");
  loadComponent("myFaq", "components/faq.html");
  loadComponent("myFeatures", "components/features.html");
  loadComponent("myTestimonials", "components/testimonials.html");
});


