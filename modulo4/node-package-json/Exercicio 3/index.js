let tarefas = [
    "Estudar",
]

const novaTarefa = [...tarefas,process.argv[2]]
console.log(novaTarefa)