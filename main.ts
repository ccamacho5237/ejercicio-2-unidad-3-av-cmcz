let probabilidad = 0
let venados = 0
let venados_def = 0
let años = 0
function evolucion_venados () {
    probabilidad = randint(0, 100)
    if (probabilidad <= 18) {
        venados += 1
        venados_def += -1
    } else if (probabilidad < 75) {
        venados += -1
        venados_def += -1
    } else {
        venados_def += -1
    }
}
input.onButtonPressed(Button.A, function () {
    venados = 200
    venados_def = 0
    while (venados > 0) {
        venados_def = venados
        evolucion_venados()
        if (venados > 0 || venados < 200) {
            años += 1
        }
    }
    basic.showString("A =")
    basic.showNumber(años)
})
