const express= require("express");
const app= express();
const path= require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
 
const port= 8080;
app.get("/elara", (req, res) => {
    res.render("index", {
        title: "Elara - Welcome to AI World",
        suggestions: [
            { text: "Help me plan a game night with my 5 best friends for under $100.", icon: "draw" },
            { text: "What are the best tips to improve my public speaking skills?", icon: "lightbulb" },
            { text: "Can you help me find the latest news on Web Development?", icon: "explore" },
            { text: "Write JavaScript code to sum all elements in an array.", icon: "code" }
        ],
        messages: [
            { type: "outgoing", avatar: "/image/user.jpg", text: "Hello there!" },
            { type: "incoming", avatar: "/image/user2.jpeg", text: "How can I assist you today?" }
        ]
    });
});


app.listen(port, ()=>{
    console.log("port is listening");
})