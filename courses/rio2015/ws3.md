---
layout: instructions
code: rio2015
title: Workshop 3
---

# Workshop 3 - Connecting the Arduino to the Internet

Today we will connect the Arduino to Internet and make it act as a web server. But first we will try some sensors and actuators. 

##A simple musical instrument

Our first mission is to make a simply instrument or sound device behaving somewhat like a [Theremin](http://en.wikipedia.org/wiki/Theremin). We will connect a light sensor - a photo resistor - and small speaker to the Arduino. 

- The speaker can be connected directly between ground and one of the digital outputs. Let's use digital pin 9
-  The photo resistor  is connected in the same way as the push button from the last workshop but this time to an analog input. Let's use analog input 0. 

We will use the Tone Pitch Follower example in 

Examples->Digital->tonePitchFollower.

This example introduces some new important components:

- Serial.print() is very useful for testing and debugging (finding errors)
- The map() function is very useful for adjusting the range of values from sensors. 


{% highlight c++ %}
void setup() {
  // initialize serial communications (for debugging only):
  Serial.begin(9600);
}

void loop() {
  // read the sensor:
  int sensorReading = analogRead(A0);
  // print the sensor reading so you know its range
  Serial.println(sensorReading);
  // map the analog input range (in this case, 400 - 1000 from the photoresistor)
  // to the output pitch range (120 - 1500Hz)
  // change the minimum and maximum input numbers below
  // depending on the range your sensor's giving:
  int thisPitch = map(sensorReading, 400, 1000, 120, 1500);

  // play the pitch:
  tone(9, thisPitch, 10);
  delay(1);        // delay in between reads for stability
}
{% endhighlight %}


##Accessing the light sensor from a web browser

We will now try to access the value of the light sensor from a web browser. We can keep the same connection for the light sensor but we should disconnect the speaker, and put an ethernet shield on top of the Arduino. The Arduino sketch will be more complicated now that we add Internet connection. Most of the code is taken from

Examples -> Ethernet - WebServer

but it has been modified a little. 


{% highlight c++ %}
/*
  Web Server 
 */

#include <SPI.h>
#include <Ethernet.h>

// Enter the MAC address for your Arduino.

byte mac[]= { 0x90, 0xA2, 0xDA, 0x00, 0x7?, 0x?? }; //esdi shield
//NOTE The last three ? should be changed to 
//the letters or numbers on your shield

// Initialize the Ethernet server library with port 80 (standard for a server)
EthernetServer server(80);

void setup()
{
  //Start serial to make testing and debugging easier
  Serial.begin(9600);

  // start the Ethernet connection and the server:
  Ethernet.begin(mac);
  server.begin();
  //print the IP-address. We will need the IP-address when we connect to it
  Serial.println(Ethernet.localIP());
}

void loop()
{
  //The following code is a little complicated
  //but almost the same code can be used for all web server sketches.
  // Listen for incoming clients - a web browser requesting a web page
  EthernetClient client = server.available();
  if (client) {
    // an http request ends with a blank line
    boolean currentLineIsBlank = true;
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        // if you've gotten to the end of the line (received a newline
        // character) and the line is blank, the http request has ended,
        // so you can send a reply
        if (c == '\n' && currentLineIsBlank) {
          // send a standard http response header
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close");
          client.println("Refresh: 2");  // refresh every 2 sec
          client.println();

          //read the value of analog pin 0          
          int a0=analogRead(0);
          
          int red=a0/4; //divide it to get number between 0 and 255
          int green=0;
          int blue=255-red;
          
          //output html code for a webpage
          client.println("<!doctype html>");
          client.print("<html><head><meta charset='UTF-8'>");
          client.print("<title>webserver</title>");
          
          //make a css stylesheet where the background color 
          //changes when analog pin 0 changes
          client.print("<style>body {background-color:");
          
          client.print("rgb(");
          client.print(red);
          client.print(",");
          client.print(green);
          client.print(",");
          client.print(blue);
          client.print(")");         
          client.print("}</style>");
                    
          client.print("</head><body>");
          //print all analog input values
          for (int analogChannel = 0; analogChannel < 6; analogChannel++) {
            client.print("analog input ");
            client.print(analogChannel);
            client.print(" is ");
            client.print(analogRead(analogChannel));
            client.println("<br>");
          }
          client.print("</body></html>");
          break;
        }
        if (c == '\n') {
          // you're starting a new line
          currentLineIsBlank = true;
        } 
        else if (c != '\r') {
          // you've gotten a character on the current line
          currentLineIsBlank = false;
        }
      }
    }
    // give the web browser time to receive the data
    delay(1);
    // close the connection:
    client.stop();
    Serial.println("finnished");
  }
}
{% endhighlight %}


Open a web browser and enter the IP-number of your Arduino in the address field, for example

http://10.0.19.21 

and you should see a web page that changes color when the light condition for the light sensor changes. 

##Controlling a LED from the web

This example has moved to [Workshop 4](ws4.html).
