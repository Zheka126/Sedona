var search_name = document.querySelector(".search_name");
var form = document.querySelector(".container_for_form");

search_name.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.remove("ulterior");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        
        if (!(form.classList.contains("ulterior")))  {
            form.classList.add("ulterior");
        }
    }
});
