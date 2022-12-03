// const input = document.querySelector('input');
// const addBtn = document.querySelector('.btn-primary');
// const ul = document.querySelector("ul");
// const empty = document.querySelector('.empty');

// addBtn.addEventListener("click", (e) => {
//     console.log(e);
//     e.preventDefault();
    
//     const text = input.value;

//     if (text !== ""){
//         const li = document.createElement("li");
//         const p = document.createElement('span');
//         p.textContent = text;
    
//         const happy = document.createTextNode("");

//         li.appendChild(p);
//         li.appendChild(happy);
//         li.appendChild(addDeleteBtn());
//         ul.appendChild(li);
    
//         input.value = "";
//         empty.style.display = "none";
//     }
// });

// function addDeleteBtn (){
//     const deleteBtn = document.createElement('button','.btn-danger');

//     deleteBtn.textContent = "X";
//     deleteBtn.className = "btn-delete";
    
//     deleteBtn.addEventListener('click', (e) => {
//         console.log(e);
//         const item = e.target.parentElement;
//         ul.removeChild(item);

//     const items = document.querySelectorAll('li');

//     if(items.length === 0){
//         empty.style.display = "block";
//     }

//     })
//     return deleteBtn;
// }

// const createTask = (task) => {
//     fetch('https://todo-list-f05f3-default-rtdb.firebaseio.com/todolist.json', {
//         method: "POST",
//         body: JSON.stringify(task)
//     })
//     .then((response) => response.json)
//     .then ((result) => {console.log(result)})
// }

// const getTasks = () => {
//     fetch('https://todo-list-f05f3-default-rtdb.firebaseio.com/todolist.json',{
//         method: "GET"
//     } )
//     .then((response) => response.json())
//     .then((result) =>console.log(result))
// }
// getTasks();

console.log("main.js running");

const express = require("express");
const app = express();
const apiRouter = require("./src/routes/indexRoutes");
const { logErrors, errorHandler } = require("./src/middlewares/errorHandler");
const config = require("./src/lib/config");

app.use(express.json());
apiRouter(app);

app.use(logErrors);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.json({ message: "El API ya no funciona" });
});

app.listen(config.app.port, () =>
console.log(`Escuchando peticiones HTTP en el puerto ${config.app.port}`)
);