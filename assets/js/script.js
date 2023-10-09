const cities = document.querySelectorAll('.cities'), 
city = document.querySelectorAll('.city'), 
link = document.querySelectorAll('a');


link.forEach((element,index) => {
    element.addEventListener('click', () => {
       removeActive();
       removeActiveCity();
       element.classList.add('active');
       city[index].classList.add('active-city');
    });
});

 let removeActive = () => {
    link.forEach((elem) => {
       elem.classList.remove('active');
    })
 }


 let removeActiveCity = () => {
    city.forEach((elem) => {
        elem.classList.remove('active-city')
    })
 }

















