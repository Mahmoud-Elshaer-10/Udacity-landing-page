// selecting nav bar <ul>
const nav = document.getElementById("navbar__list");
// selecting all sections
const sections = document.querySelectorAll("section");

// looping over all sections
sections.forEach((section) => {
  // build the nav
  // selecting the value of data-nav attribute of each section tag
  const sectionTitle = section.getAttribute("data-nav");
  // creating <li> element
  const li = document.createElement("li");
  // creating <a> element
  const a = document.createElement("a");
  // adding href attribute to <a> element with relevant section id
  a.href = `#${section.id}`;
  // setting class to <a> element
  a.className = "menu__link";
  // updating text content of <a> element
  a.textContent = sectionTitle;
  // adding <a> element to <li> element
  li.appendChild(a);
  // adding <li> element to nav bar <ul>
  nav.appendChild(li);
});

// selecting all links in nav bar <ul>
const links = document.querySelectorAll(".menu__link");

// while scrolling function
window.onscroll = () => {
  // looping over all sections
  sections.forEach((section) => {
    // condition to check current section in viewport
    if (
      section.getBoundingClientRect().top <= 300 &&
      section.getBoundingClientRect().bottom >= 300
    ) {
      // looping over all sections
      sections.forEach((section) => {
        // removing active class from all sections
        section.classList.remove("active");
      });
      // Add class 'active' to section when near top of viewport
      section.classList.add("active");
      // looping over all nav links
      links.forEach((link) => {
        // removing active class from all links
        link.classList.remove("active");
      });
      // selecting current link related to active section
      const currentLink = document.querySelector(
        `.menu__link[href="#${section.id}"]`
      );
      // adding active class to current link
      currentLink.classList.add("active");
    }
  });
};

// looping over all links
links.forEach((link) => {
  // listening to click event on a link
  link.addEventListener("click", () => {
    // looping over all links
    links.forEach((link) => {
      // removing active class from all links
      link.classList.remove("active");
    });
    // adding active class to clicked link
    link.classList.add("active");
    // looping over all sections
    sections.forEach((section) => {
      // removing active class from all sections
      section.classList.remove("active");
    });
    // selecting current section related to clicked link
    const currentSection = document.querySelector(link.getAttribute("href"));
    // Set section as active
    currentSection.classList.add("active");
  });
});
