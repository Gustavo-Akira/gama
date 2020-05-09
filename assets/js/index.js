document.addEventListener(
    'DOMContentLoaded',()=>{
        loadData();
        menu();
    }
);
function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data=this.responseText;
        console.log(data);
        data =JSON.parse(data);
        var section = document.querySelector("section.container");
        for ( var i in data) {
            //construindo todos os elementos
            let level = document.createElement("div");
            let right = document.createElement("div");
            let left = document.createElement("div");
            let item = document.createElement("div");
            let figure = document.createElement("figure");
            let img = document.createElement("img");
            let p1 = document.createElement("h1");
            let p2 = document.createElement("h2");
            let p3 = document.createElement("h3");
            let div2 = document.createElement("div");
            //adicionando os estilos nos elementos 
            level.classList.add("level");
            level.classList.add("card");
            right.classList.add("level-right");
            left.classList.add("level-left");
            figure.classList.add("image");
            if(window.innerWidth > 600){
                figure.classList.add("is-128x128");
                figure.style.width="400px";
            }
            figure.classList.add("is-square");
            p1.classList.add("title");
            p1.classList.add("is-5");
            p2.classList.add("subtitle");
            p3.classList.add("subtitle");
            p3.classList.add("is-1");
            p1.classList.add("mr");
            p2.classList.add("mr");
            p3.classList.add("mr");
            p3.classList.add("has-text-success");
            p3.classList.add("is-4");
            div2.classList.add("has-text-right");
            //colocando os atributos nos seus respectivos elementos
            img.src = data[i].photo;
            p1.innerHTML = data[i].name;
            p2.innerHTML = data[i].property_type;
            p3.innerHTML = "R$:"+data[i].price;
            //colocando a imagem dentro da figure
            figure.appendChild(img);

            //colocando a figure dentro da div left-level
            left.appendChild(figure);

            //colocando os p dentro da div item
            div2.appendChild(p1);
            div2.appendChild(p2);
            div2.appendChild(p3);
            
            item.appendChild(div2);
            
            //colocadon o item dentro de right
            right.appendChild(item);

            //colocando right e left dentro de level
            level.appendChild(left);
            level.appendChild(right);

            //colocando level dentro de section
            section.appendChild(level);
        }
      }
    };
    xhttp.open("GET", "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72", true);
    xhttp.send();
  }
  function resize(){
    document.querySelectorAll("figure").forEach(element=>{
        console.log("deu");
        if(window.innerWidth > 600){
            element.classList.add("is-128x128");
            element.style.width="400px";
        }else{
            element.classList.remove("is-128x128");
            element.style = null;
        }
    });
    }
    function menu(){
        const $burg = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        if($burg.length > 0){
            $burg.forEach( item => {
                item.addEventListener('click', () => {
          
                  
                  const target = item.dataset.target;
                  const $target = document.getElementById(target);
          
                 
                  item.classList.toggle('is-active');
                  $target.classList.toggle('is-active');
          
                });
              });
        }
    }