//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
  //alert("led on");
  console.log("led on");
  //document.getElementById("sensor").innerHTML="led on";
  message = new Paho.MQTT.Message("ON");
      message.destinationName = "carl1998ll@hotmail.com/test";
      client.send(message);
      

}


function LED1_Off(){  
  //alert("led off");
  console.log("led off");
  message = new Paho.MQTT.Message("OFF");
      message.destinationName = "carl1998ll@hotmail.com/test";
      client.send(message);
  //document.getElementById("sensor").innerHTML="led off";
}
    
  




// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "carl1998ll@hotmail.com",
    password: "carl1998ll",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
  
    client.subscribe("carl1998ll@hotmail.com/test1");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "carl1998ll@hotmail.com/test";
    client.send(message);

  }

  function doFail(e){
    console.log(e);
  
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
    var men=message.payloadString.split("-");
    document.getElementById("sensor").innerHTML=men[0];
    document.getElementById("sensor1").innerHTML=men[1];

  }
