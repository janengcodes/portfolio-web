// const cursorSmall = document.querySelector('.small');
// const oldBody = document.getElementById('body')
// const positionElement = (e)=> {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;
//     oldBody.classList.add('newClass');
//   cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
// }

// window.addEventListener('mousemove', positionElement)

const detailsYale = document.getElementById('details-yale')
detailsYale.addEventListener("click", function () {
    const yaleGrid = document.getElementById("yale-grid");
    const yaleSkills = document.getElementById("yale-skills");
     yaleGrid.classList.remove("display-none");
     yaleSkills.classList.remove("display-none");
     detailsYale.classList.add("display-none");
})

const detailsFS = document.getElementById('details-foundry-six')
detailsFS.addEventListener("click", function () {
    const fsGrid = document.getElementById('foundry-six-grid');
    fsGrid.classList.remove("display-none");
} )

const detailsJOC = document.getElementById("details-joc");
detailsJOC.addEventListener("click", function () {
  const jocGrid = document.getElementById("joc-grid");
  jocGrid.classList.remove("display-none"); 
});

const viewMore1 = document.getElementById("read-more-1"); 
viewMore1.addEventListener("click", function () {
  const jocGrid = document.getElementById("project-skills-1");
  jocGrid.classList.remove("display-none");
});