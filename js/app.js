/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


const navbar = document.querySelector('.page__header');


//to top button that appears when the user is not on the top of the web page 
const toTopBtn = document.querySelector(".to-top-btn");
//get the articles to make nav link for each article 
const articles = document.querySelectorAll('.article');
//new document fragment to avoid reflows and repaints 
const navLinks = document.createDocumentFragment();
// this loop is creating a new link for each article and set the data-nav attribute 
for(i=0;i<articles.length;i++){
    const navLink = document.createElement('li');
    const dataNav = articles[i].getAttribute("data-nav");
    navLink.classList.add('menu__link');
    navLink.setAttribute("data-nav",dataNav);
    navLink.innerText=dataNav;
    navLinks.appendChild(navLink);
}
    
// adding the fragment for the ul 
document.querySelector('ul#navbar__list').appendChild(navLinks);

const menuLinks = document.querySelectorAll(".menu__link");
//add event listener for each menu link to make the scroll navigation 
menuLinks.forEach((link)=>{
    link.addEventListener("click", (e) => {
       const navValue = link.getAttribute("data-nav");
       const scrollTarget = document.querySelector(`section.article[data-nav='${navValue}']`);
       scrollTarget.scrollIntoView({behavior:'smooth'});
      
        });
     });
     

//function to highlight the Active link to make user knows where is he right now 
function checkActiveLink(){
    let activeLink = null;
    articles.forEach(article => {
        const rect = article.getBoundingClientRect();
        if(rect.top< window.innerHeight-500 && rect.bottom>=0){
            activeLink = article;
        }
    
        if(activeLink){
            const navValue = activeLink.getAttribute("data-nav");
            menuLinks.forEach(link => {
                if(link.getAttribute("data-nav")===navValue){
                    link.classList.add("active");
                }else{
                    link.classList.remove("active");
                }
             });

        }
    });

}





let isScrolling;
// function to show the navbar
function showNavbar() {
    navbar.style.display = 'block';
}


// function to hide the navbar
function hideNavbar() {
    navbar.style.display = 'none';
}


// show the navbar on initial page load
showNavbar();

// event listner to update the active link 
window.addEventListener('scroll', function(){
    showNavbar();
    clearTimeout(isScrolling);
    // set a timeout to hide the navbar after 1 second of no scrolling
    isScrolling = setTimeout(() => {
        hideNavbar();
    }, 1000); 
    checkActiveLink();
    if (window.scrollY > 100) {
        toTopBtn.classList.add("to-top-btn-active");
      } else {
        toTopBtn.classList.remove("to-top-btn-active");
      }
});



//diappears when the view is on the top of the page 
toTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
        });
     });
        
