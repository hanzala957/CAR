let searchBar = document.getElementById("searchbar");
let cars = document.querySelectorAll(".car-card");


searchBar.onkeyup = () => {
  let text = searchBar.value.toLowerCase();
  cars.forEach(car => {
    car.style.display = car.dataset.name.toLowerCase().includes(text) ? "block" : "none";
  });
};


window.onscroll = () => {
  let trigger = window.innerHeight * 0.8;
  cars.forEach(car => {
    if (car.getBoundingClientRect().top < trigger) {
      car.classList.add("show");
    }
  });
};


window.onscroll();

document.getElementById("shopbtn").addEventListener("click",function(){
    alert(" Thanks for shophing with Us!\n📞 Contact no:+92-3135673137 \n Email: hanzalarehan007@gmail.com");
});
