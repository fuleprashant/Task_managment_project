import express from "express";

const app = express();
// console.log(app)

const port = 4000;

app.get("/start", (req, res) => {
    res.send("the server has been start")
})
app.listen(port, () => {
    console.log(`the server is run on the browser http://localhost:${port}`)
})