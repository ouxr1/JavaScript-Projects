let count = 0;

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
       const styles = e.currentTarget.className;
       if ( styles.includes("decrease")){
        count-- ;
       }
       else if (styles.includes("increase")){
        count++ ;
       }
       else {
        count = 0 ;
       }
       console.log(count)
       value.textContent=count;
       

    })

    if (count > 0){
        value.style.color = "green";
    }
    else if (count < 0){
        value.style.color = "red";
    }
    else {
        value.style.color = "#222";
    }
})