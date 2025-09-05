function timer(x){
    // Fecha del evento
    var fin = x
    // Variables que convierten las unidades
    // de tiempo a milisegundos
    var segundos = 1000
    var minutos = segundos*60
    var horas = minutos*60
    var dias = horas*24
    // Reloj
    var tiempo
    // Fecha actual
    var ahora = new Date()
    //document.write(ahora)
    // El tiempo faltante
    var diferencia = fin - ahora
    // En caso de que el evento ya haya pasado
    if (diferencia == 0){
        // 
        clearInterval(timer)
        document.write("Ahora")
        return
    }
    if (diferencia < 0){
        // 
        clearInterval(timer)
        document.write("Finalizado")
        return
    }
    // Calculo del tiempo faltante
    // dia
    var d = Math.floor(diferencia/dias)
    // hora
    var h = Math.floor((diferencia%dias)/horas)
    // minutos
    var m = Math.floor((diferencia%horas)/minutos)
    // segundos
    var s = Math.floor((diferencia%minutos)/segundos)

    // Escribe el tiempo faltante en el html
    document.write(d + "days ")
    document.write(h + "hrs ")
    document.write(m + "mins ")
    document.write(s + "secs")
}