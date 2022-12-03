const { Router } = require("express");
const routes = Router();

routes.get("/gettasks", async (req, res) => {

    const getTasks = await fetch(
    "https://todo-list-f05f3-default-rtdb.firebaseio.com/todolist.json",
    {
      method: "GET",
    }
  )
  const data = await getTasks.json();
  res.status(200).json({ message: "Holi", payload: data});
   
});

routes.post("/createtasks", async (req, res) => {
    console.log("Request body:", req.body);


    const createTasks = await fetch(
        "https://todo-list-f05f3-default-rtdb.firebaseio.com/todolist.json",
        {
            method: "POST",
            body: JSON.stringify(req.body)
        }
    )
    const data = await createTasks.json();
    res.status(201).json({ message: "Tarea creada", payload: data.name});
});

routes.patch("/patchtasks", async (req, res) =>{
const id = req.query['id']
console.log(id);
    const patchTasks = await fetch(
        `https://todo-list-f05f3-default-rtdb.firebaseio.com/todolist/${id}.json`,
     {
        method: "PATCH",
        body: JSON.stringify(req.body)
     }   
    )
    const data = await patchTasks.json();
    res.status(200).json({ message: "Propiedad actualizada exitosamente", payload: data})
});

routes.put("/puttasks", async (req, res) =>{
    const id = req.query['id']
    // console.log(id);
        const putTasks = await fetch(
            `https://todo-list-f05f3-default-rtdb.firebaseio.com/todolist/${id}.json`,
         {
            method: "PUT",
            body: JSON.stringify(req.body)
         }   
        )
        const data = await putTasks.json();
        res.status(200).json({ message: "Propiedad actualizada exitosamente", payload: data})
    });

    routes.delete("/deletetasks", async(req, res) =>{
        const id = req.query['id']
        const deleteTasks = await fetch (

            `https://todo-list-f05f3-default-rtdb.firebaseio.com/todolist/${id}.json`,
            {
                method: "DELETE",
                body: JSON.stringify(req.body)
            }
        )
        const data= await deleteTasks.json();
        res.status(202).json({ message: "Tarea eliminada exitosamente", payload: data})
    })

module.exports = routes;