const {EventEmitter} = require("event")
const fs = require("fs").promises

const event = new EventEmitter()

const login = async function (data) {
    const users = JSON.parse(await fs.readFile("./users.json"))

    const user = users.find(
        (u) => u.username === data.username && u.password === data.password
    )
    if(!user) return console.log("Bunday fuydalauvchi topilmadi")

    console.log("Siz muvaffaqiyatli tizimga kirdingiz");
}

event.on("login", login)
event.emit("login", {username: "username", password: "password"})