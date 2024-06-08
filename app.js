const projects = document.querySelectorAll('.projects');
const project = document.querySelectorAll('.project')
const projectsImgs = document.querySelectorAll('.project-image');
const allProjects = document.querySelector('.project-card');



function ProjectTransitions(){
  //Project click active class
  for(let i = 0; i < project.length; i++){
    project[i].addEventListener('click', function(){
      let currentProject = document.querySelectorAll('.active-project');
      currentProject[0].className = currentProject[0].className.replace('active-project', '');
      this.className += ' active-project';
    })
  }

  //sections active class
  allProjects.addEventListener('click', (e) =>{
    const id = e.target.dataset.id;
    if(id){
      //remove selected from the other btns
      projectsImgs.forEach((prjct) =>{
        prjct.classList.remove('active');
      })
      e.target.classList.add('active');

      //hide other sections
      project.forEach((section) =>{
        section.classList.remove('active');
      })

      // 43:00
      const element = document.getElementById(id)
      element.classList.add('active');
    }
  })
}


ProjectTransitions();