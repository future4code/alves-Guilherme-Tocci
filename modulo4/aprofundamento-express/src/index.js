"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const afazeres_1 = require("./afazeres");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓");
});
const arrayAfazeres = afazeres_1.array;
app.get('/afazeres/:completed', (req, res) => {
    const teste = req.params.completed;
    const newArray = arrayAfazeres.filter((completed) => {
        if (teste) {
            return completed.completed === true;
        }
        else {
            return completed.completed === false;
        }
    });
    res.send(newArray);
});
app.post("/afazeres/addAfazeres", (req, res) => {
    const { userId, title, completed } = req.body;
    const afazer = arrayAfazeres.find((user) => user.userId === userId);
    if (afazer) {
        arrayAfazeres.push({
            "userId": userId,
            "id": +Date.now(),
            "title": title,
            "completed": completed
        });
        res.send('Tarefa cadastrada com sucesso!');
    }
    else {
        res.status(400).send("Usuario não encontrado");
    }
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
