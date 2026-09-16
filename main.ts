function 前進 () {
    Maqueen_V5.setRgblLed(Maqueen_V5.DirectionType.All, Maqueen_V5.CarLightColors.White)
    Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 100)
}
function 停止 () {
    Maqueen_V5.setRgblLed(Maqueen_V5.DirectionType.All, Maqueen_V5.CarLightColors.Red)
    Maqueen_V5.motorStop(Maqueen_V5.Motors.All)
}
Maqueen_V5.I2CInit()
Maqueen_V5.patrolling(Maqueen_V5.Patrolling.ON)
basic.forever(function () {
	
})
