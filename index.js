const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");




//uderstand fronrnd data meaning to express
app.use(express.urlencoded({ extended: true }));


//set views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//set public
app.use(express.static(path.join(__dirname, "public")));


// override with POST having ?_method=patch / delete
app.use(methodOverride('_method'));

//posts data
let posts = [
    {
        id: uuidv4(),
        username: "shradha_khapra",
        content: "Hello coders"
    },
    {
        id: uuidv4(),
        username: "shilpa_ghosh",
        content: "hello dadabhai"
    },
    {
        id: uuidv4(),
        username: "subhajit_manna",
        content: "namaste coding"
    },
    {
        id: uuidv4(),
        username: "hitesh_chakroborty",
        content: "chai our code"
    },
    {
        id: uuidv4(),
        username: "harsh_sharma",
        content: "to kyse hoo ap log"
    },
]

// /posts route
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// home route
app.get("/", (req, res) => {
    res.send("Hey this is rest api");
})

//new post form route
app.get("/posts/new", (req, res) => {
    res.render("form.ejs");
})

//post posts request
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    // res.send("Post succesfully post !")

    //targeting exciting path
    res.redirect("/posts");

});

//show route
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    // console.log(id);
    res.render("show.ejs", { post });
})

//patch request 
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});


//form edit route
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
})

//delete route
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts")
})

//port
app.listen(port, () => {
    console.log("Linstening on port : 3000");
});