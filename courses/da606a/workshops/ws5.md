---
layout: instructions_en
code: da606a
title: Workshop 5
---

# Workshop 5 - WebSockets

WebSocket is a protocol for doing real time communication between for example web browsers or connected devices. WebSocket is part of the html5-standard. WebSockets are often used for chat services, but are also good for internet of things-communication. 

A good introduction to Websockets is found at [Wikipedia](https://en.wikipedia.org/wiki/WebSocket) and a more detailed description is found at [Websockets 101](http://lucumr.pocoo.org/2012/9/24/websockets-101/). Demos and good examples can be found at [WebSocket.org](https://www.websocket.org).

One advantage with WebSockets is that it can keep a connection open. An Arduino can act as a websocket client and open a connection to a websocket server. When this connection is open, data can be sent in both directions. 

The task for today is to turn the Arduino into a WebSocket client that can send data to and receive messages from a WebSocket server. 

The first step is to install a WebSocket library for Arduino. Go to [Arduino-Websocket on Github](https://github.com/brandenhall/Arduino-Websocket) and download ZIP. Unzip it and then you should probably rename the folder from *Arduino-Websocket-master* to *Arduino-Websocket*. Copy this folder to the *libraries*-folder of your Arduino installation. This is usually found in Documents/Arduino/libraries. 

**There is an error in one of the library files**: 

edit the file sha1.cpp and change line 11 from 

```cpp
uint8_t sha1InitState[] PROGMEM = {
```

to 

```cpp
const uint8_t sha1InitState[] PROGMEM = {
```

Restart Arduino to make sure it will find the WebSocket library. 

Try the following Arduino sketch:

**WebSocketClient.ino**

```cpp
#include <SPI.h>
#include <Ethernet.h>

#include <WebSocketClient.h>

EthernetClient client;
WebSocketClient webSocketClient;

//change to your mac address
byte mac[]= { 0x90, 0xA2, 0xDA, 0x??, 0x??, 0x?? };

void setup() {
  Serial.begin(9600);
  Serial.println(F("Websocketclient starting"));
  Ethernet.begin(mac); // initialize ethernet
  Serial.println(Ethernet.localIP()); // printout IP address for debug purposes
  delay(300); // this is arduino baby ;-)

  // Connect to the websocket server
  if (client.connect("echo.websocket.org", 80)) {
    Serial.println("Connected");
  } else {
    Serial.println("Connection failed.");
    while(1) {
      // Hang on failure
    }
  }

  // Handshake with the server
  webSocketClient.path = "/";
  webSocketClient.host = "echo.websocket.org";
  
  if (webSocketClient.handshake(client)) {
    Serial.println("Handshake successful");
  } else {
    Serial.println("Handshake failed.");
    while(1) {
      // Hang on failure
    }  
  }
}

void loop() {
  String data;
  
  if (client.connected()) {
    
    webSocketClient.getData(data);

    if (data.length() > 0) {
      Serial.print("Received data: ");
      Serial.println(data);
    }

    // capture the value of analog 0, send it along
    data = String(analogRead(0));
    webSocketClient.sendData(data);
  } else {    
    Serial.println("Client disconnected.");
    while (1) {
      // Hang on disconnect.
    }
  }
  
  // wait to fully let the client disconnect
  delay(1000);
}

```

Open the serial monitor and check if the Arduino WebSocket client can connect to the testserver at ws://echo.websocket.org. More info on this server can be found at [www.websocket.org/echo.html](http://www.websocket.org/echo.html). 

The next step is to your own WebSocket server. I have only tested WebSocket servers on OSX and Arduino, unfortunately not on Windows. 

A WebSocket server on a mac is done in this way:

Go to [https://github.com/joewalnes/websocketd/releases](https://github.com/joewalnes/websocketd/releases) and download appropriate version. websocketd-0.2.11-darwin_386.zip works on a mac. Check the [ten second tutorial](https://github.com/joewalnes/websocketd/wiki/Ten-second-tutorial).

Finally, change 

```
 webSocketClient.host = "echo.websocket.org", 80
```

into 

```
 webSocketClient.host = "ip.number.of.server", 8080
```

and 

```
webSocketClient.host = "echo.websocket.org";
```

into 

```
webSocketClient.host = "ip.number.of.server:8080";
```

Upload the changed program and check if it can connect to your server. 

A WebSocket server can also be installed on another Arduino. Try the following code:


**WebSocketServer.ino**

```cpp
#include <SPI.h>
#include <Ethernet.h>

#include <WebSocketServer.h>

byte mac[]= { 0x90, 0xA2, 0xDA, 0x??, 0x??, 0x?? };

EthernetServer server(80);
WebSocketServer webSocketServer;

void handleClientData(String &dataString) {    
  Serial.println(dataString);
}

// send the client the analog value of a pin
void sendClientData(int pin) {
  String data = "pin" + String(pin) + ":"+String(analogRead(pin));
  webSocketServer.sendData(data);  
}

void setup() {
  Serial.begin(9600);  
  Serial.println("Starting websocket...");
  Ethernet.begin(mac);
  // print the Ethernet board/shield's IP address:
  Serial.print("My IP address: ");
  Serial.println(Ethernet.localIP());
  server.begin();    
  delay(100);
}

void loop() {
  String data;
  EthernetClient client = server.available();
  if (client.connected() && webSocketServer.handshake(client)) {
    while (client.connected()) {
      data = webSocketServer.getData();
      if (data.length() > 0) {
        handleClientData(data);
      }
      sendClientData(0);
      delay(500);
    }
  }
  
  // wait to fully let the client disconnect
  delay(1000);
}
```

Now two Arduinos can chat with each other. 

