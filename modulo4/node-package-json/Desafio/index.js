let tarefas = []

function adicionaTarefa(item) {
    const fs = require('fs')

    fs.readFile('./test.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        const novatarefa = JSON.parse(data)
        tarefas = [...novatarefa, item]

        console.table(tarefas)

        const content = JSON.stringify(tarefas)
        fs.writeFile('./test.txt', content, err => {
            if (err) {
                console.error(err)
                return
            }
        })
    })

}

adicionaTarefa(process.argv[2])