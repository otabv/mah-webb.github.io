---
layout: instructions_en
code: da606a
title: Workshop 4
---

# Workshop 4 - More web services

Last week we introduced Xively and Zapier. This week will look at making our own data logging service by connecting different existing services. 

[Zapier](http://zapier.com) and [If This Then That - IFTTT](http://ifttt.com) are services that act as a "glue" between other services. Zapier and IFTTT are quite similar, and we will use Zapier's *webhooks* that are flexible and useful. In short, you send a webhook to Zapier, and hundreds of actions can be performed - emails can be sent, google docs can be edited, tweets can be sent etc. We will use Zapier to send data from an Arduino into a Google spreadsheet. 

Zapier requires the webhooks to be sent in  a secure way, through ssl. Unfortunately, standard Arduinos don't have enough computing power to do ssl encryption. We can get around this by having an intermediate server between the Arduino and Zapier. It will work something like this:

1. The Arduino reads some sensor data
2. The Arduino acts as a web client and makes a http-request to a web server, in our case a PHP-server
3. The PHP-server forwards this request as https-request to Zapier
4. Zapier enters the data into a Google spread sheet. Done

We could get rid of the intermediate PHP-server with a more powerful Arduino such as Arduino 101 or Arduino Due.

We have to start from the back:

Step 1: Create a Google spread sheet. 
Step 2: Create a new *Zap* in Zapier. Use webhook as Trigger App. Follow the instructions and remember your custom url. Then use Google Sheets and Create Spreadsheet Row as action.
Step 3: Create an acount on ddwap.mah.se. Put the PHP-program found below on the PHP-server.
Step 4: Put the Arduino sketch below in your Arduino. Change the sketch to send some sensor data as well. 

## PHP program zapier.php

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Zapier relay</title>
</head>
<body>
<?php
$data=$_GET['data'];
$webhookkey="??????"; //change to your key
$url = "https://zapier.com/hooks/catch/$webhookkey/?data=$data";
$reply=file_get_contents($url);
echo $reply;
?>
</body>
</html>
```


## Arduino sketch zapier.ino

```cpp
/*
 This is an adapted version of the Example
 file->Examples->Ethernet->WebClientRepeating
 http://www.arduino.cc/en/Tutorial/WebClientRepeating
 This code is in the public domain.
*/

#include <SPI.h>
#include <Ethernet.h>

// assign a MAC address for the ethernet controller.
// fill in your address here:

byte mac[]= { 0x7C, 0xC3, 0xA1, 0x??, 0x??, 0x?? };


// initialize the library instance:
EthernetClient client;

char server[] = "ddwap.mah.se";
char path[] = "/yourpath/zapier.php"; //change to your path

unsigned long lastConnectionTime = 0;             // last time you connected to the server, ms 
const unsigned long postingInterval = 60L * 1000L; // delay between updates, ms
// the "L" is needed to use long type numbers

void setup() {
  // start serial port:
  Serial.begin(9600);

  // give the ethernet module time to boot up:
  delay(1000);
  // start the Ethernet connection using a fixed IP address and DNS server:
  Ethernet.begin(mac);
  // print the Ethernet board/shield's IP address:
  Serial.print("My IP address: ");
  Serial.println(Ethernet.localIP());
}

void loop() {
  // if there's incoming data from the net connection.
  // send it out the serial port.  This is for debugging
  // purposes only:
  if (client.available()) {
    char c = client.read();
    Serial.write(c);
  }

  // if n seconds have passed since your last connection,
  // then connect again and send data:
  if (millis() - lastConnectionTime > postingInterval) {
    httpRequest();
  }

}

// this method makes a HTTP connection to the server:
void httpRequest() {
  // close any connection before send a new request.
  // This will free the socket on the WiFi shield
  client.stop();

  // if there's a successful connection:
  if (client.connect(server, 80)) {
    Serial.println("connecting...");
    // send the HTTP PUT request:
    client.print("GET ");
    client.print(path);
    client.println(" HTTP/1.1");
    client.print("Host: ");
    client.println(server);
    client.println("User-Agent: arduino-ethernet");
    client.println("Connection: close");
    client.println();

    // note the time that the connection was made:
    lastConnectionTime = millis();
  } else {
    // if you couldn't make a connection:
    Serial.println("connection failed");
  }
}

```

