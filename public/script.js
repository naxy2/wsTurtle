ws = new WebSocket("wss://wsturtle.herokuapp.com")

ws.onopen = function(event){
    ws.send("controllo")
}
ws.onmessage = function(event){
    console.log(event.data)
}


function avanti(){

}