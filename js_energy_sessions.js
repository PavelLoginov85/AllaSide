function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  let i, tabcontents, tablinks;
  tabcontents = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }
// Remove the background color of all tablinks/buttons
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].style.backgroundColor = "";
  
}
  

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

// --------------------------- слайдер своё тело ---------------------------------------------
//---------------------------------------------------------------------------------------------------- 
// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.previous_button');
const nextButton = document.querySelector('.next_button');
const slides = Array.from(slider.querySelectorAll('.img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  console.log(slider);
  console.log(slides);
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  console.log(slides);
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------


// --------------------------- слайдер сила женщины ---------------------------------------------
//---------------------------------------------------------------------------------------------------- 
// Получаем элементы слайдера
const x = document.querySelector('.slider_w');
const prevButton1 = document.querySelector('.previous_button1');
const nextButton1 = document.querySelector('.next_button1');
const pages = Array.from(x.querySelectorAll('.img1'));
const slideCount1 = pages.length;
let slideIndex1 = 0;

// Устанавливаем обработчики событий для кнопок
prevButton1.addEventListener('click', showPreviousSlide1);
nextButton1.addEventListener('click', showNextSlide1);

// Функция для показа предыдущего слайда
function showPreviousSlide1() {
  slideIndex1 = (slideIndex1 - 1 + slideCount1) % slideCount1;
  updateSlider1();
}

// Функция для показа следующего слайда
function showNextSlide1() {
  slideIndex1 = (slideIndex1 + 1) % slideCount1;
  updateSlider1();
}

// Функция для обновления отображения слайдера
function updateSlider1() {
  pages.forEach((page, i) => {
    if (i === slideIndex1) {
      page.style.display = 'block';
      
    } else {
      page.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider1();

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------



// --------------------------- слайдер  ченнелинг ---------------------------------------------
//---------------------------------------------------------------------------------------------------- 
// Получаем элементы слайдера

const y = document.querySelector('.slider_block');
const prevButton2 = document.querySelector('.previous_button2');
const nextButton2 = document.querySelector('.next_button2');
const chapters = Array.from(y.querySelectorAll('.img2'));
const slideCount2 = pages.length;
let slideIndex2 = 0;

// Устанавливаем обработчики событий для кнопок
prevButton2.addEventListener('click', showPreviousSlide2);
nextButton2.addEventListener('click', showNextSlide2);

// Функция для показа предыдущего слайда
function showPreviousSlide2() {
  slideIndex2 = (slideIndex2 - 1 + slideCount2) % slideCount2;
  updateSlider2();
}

// Функция для показа следующего слайда
function showNextSlide2() {
  slideIndex2 = (slideIndex2 + 1) % slideCount2;
  updateSlider2();
}

// Функция для обновления отображения слайдера
function updateSlider2() {
  chapters.forEach((chapter, j) => {
    if (j === slideIndex2) {
      chapter.style.display = 'block';
      
    } else {
      chapter.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider2();

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------





// -------------------------------------------- accordion  ----------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------

let acc = document.getElementsByClassName('accord_header_sign');


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
     this.classList.toggle("active");
    

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}







// let acc_button = document.getElementsByClassName('acc_button'); // all buttons
// let accord_body = document.getElementsByClassName('acc_body');


// ----------------------------------------------------------------------------------

/*prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}*/

let text1 = document.getElementsByClassName('text_accord');
let buttton = document.getElementById('sss');

buttton.addEventListener('click', chengeColor);

function chengeColor()
{
  for(i=0; i < text1.length; i++ ){
    console.console.log(text1[i]);
    
  }

}

buttton.addEventListener('click', chengeColor);