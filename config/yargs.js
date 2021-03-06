const descripcion ={
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
};

const completado = {
    completado: {
        default: true,
        alias: 'c',
        desc: 'marca como completado o pendiente la tarea'
    }
}

const argv = require("yargs")
.command("crear","Crear un elemento por hacer",{
    descripcion
})
.command("actualizar","actualiza el estado completado de una tarea", {
    descripcion,
    completado
})
.command("borrar", "borrar alguna tarea",{
    descripcion
})
.help()
.argv;

module.exports = {
    argv
};
