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
 *  
*/
/**
 * Define Global Variables
 * 
*/
const Sectionsarray= document.querySelectorAll('section');
const listitem = document.querySelector('ul');
const fragm = document.createDocumentFragment();
const sectioncount = Sectionsarray.length;


//bulid the navigation

	var n=0;
	

	while ( n< sectioncount){

		

	//get section name
   const sectionname = Sectionsarray[n].getAttribute('data-nav');
	
	//get section
    const sectionid = Sectionsarray[n].getAttribute('id');
//create new list
    const newlist = document.createElement("li");
	 const tagelement  = document.createElement("tagel");
   
  tagelement.classList.add("menu__link");
  tagelement.setAttribute('id',"L"+ sectionid);
   tagelement.setAttribute('href',sectionid);
      const section = document.getElementById(Sectionsarray[n].id);
	   
   tagelement.addEventListener('click', e => {
	   		  e.preventDefault();
      section.scrollIntoView({behavior : "smooth"})
	
		
		
	 });
    
// add the name of Sectionsarray  from th(e data-nav
    const sectiontext = document.createTextNode(sectionname);

    tagelement.appendChild(sectiontext);
	 newlist.appendChild(tagelement);
    fragm.appendChild(newlist);
	    listitem.appendChild(fragm);
		n++;
		};
		
		
	
 
	 function activebtn(){

         const sectionactive = document.getElementsByClassName('your-active-class')[0];

        if(sectionactive !== undefined){
            sectionactive.classList.remove('your-active-class')
        }
        const activebtn = document.getElementsByClassName('navactive')[0];

        if(activebtn !== undefined){
			
            activebtn.classList.remove('navactive')
			activebtn.classList.add('menu__link')
        }
// Set sections as active For loop 
var s=0
            while (s< sectioncount){
	   
        const clientRec = Sectionsarray[s].getBoundingClientRect();

        if(clientRec.top >=-30 && clientRec.top<400){
              
         Sectionsarray[s].classList.add('your-active-class');
// Set nav-bar as active
               
       	const listactive = document.getElementById("L"+ Sectionsarray[s].id);
		 listactive.classList.remove('menu__link')
		  
         listactive.classList.add('navactive');
		
		
		}
		s++
			}
			
	 }
	

window.addEventListener('scroll',activebtn)