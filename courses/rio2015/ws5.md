---
layout: instructions
code: rio2015
title: Workshop 5
---

# Workshop 4 - Bluetooth

Today we will have a look at Bluetooth. Bluetooth is a low power communication technology originally developed by Ericsson Mobile in Lund (wow, Bluetooth was developed in my hometown, and Arduino partly developed in the town where I work). It is named after a Danish and Norwegian king from the Viking era, *[Harald Blåtand](http://en.wikipedia.org/wiki/Harald_Bluetooth)*. Blåtand means Bluetooth. A very interesting book where Harald Blåtand is featured is [The Long Ships](http://en.wikipedia.org/wiki/The_Long_Ships) by Swedish author [Frans G. Bengtsson](http://en.wikipedia.org/wiki/Frans_G._Bengtsson). 

![](gorm.jpg)

[Bluetooth Low Energy](http://en.wikipedia.org/wiki/Bluetooth_low_energy) is recent version of Bluetooth that uses less energy than the original version, and is also easier to connect to various devices such as mobile phones. 

As an introduction to the Bluetooth module we will use today, please read [this tutorial from Sparkfun](https://learn.sparkfun.com/tutorials/using-the-bluesmirf).

Install the Bluetooth Terminal Android application from Next Prototypes:

<https://play.google.com/store/apps/details?id=nextprototypes.bluetoothterminal>


**NOTE** There are several applications with the same name, make sure to use the one from Next Prototypes.

Now an Android phone can communicate with an Arduino with a Bluesmirf module. Use this Arduino sketch:

{% highlight c++ %}
/*
This is for bluetooth communication between Arduino with Bluesmirf and Android with 
Bluetooth Terminal by Next prototypes (note: there are other bluetooth terminals that 
also may work) 

Link to Google play:  https://play.google.com/store/apps/details?id=nextprototypes.bluetoothterminal


This might be useful too: https://play.google.com/store/apps/details?id=nextprototypes.BTSerialController
And this: https://play.google.com/store/apps/details?id=nextprototypes.button16BSC

Connect Bluesmirf like this, from left to right, looking from the top with antenna close to you

CTS-1: do not connect
VCC:   connect to 5V on the Arduino
GND:   connect to GND on the Arduino
TX-0:  connect to D2 on the Arduino
RX-1:  connect to D3 on the Arduino
RTS-0: do not connect

*/

#include <SoftwareSerial.h>  

int bluetoothTx = 2;  // TX-O pin of bluetooth bluesmirf, Arduino D2
int bluetoothRx = 3;  // RX-I pin of bluetooth bluesmirf, Arduino D3

//control a led on pin 13
int led=13;

//Usually serial communication is done on pins 1 and 2 but with SoftwareSerial, any pins can be used.
//This also makes it possible to use the serial monitor at the same time as bluetooth
SoftwareSerial bluetooth(bluetoothTx, bluetoothRx);

void setup()
{
  pinMode(led, OUTPUT);
  //Begin the serial monitor at 9600bps
  Serial.begin(9600); 
  //The Bluetooth Smirf defaults to 115200bps, and that is also default for
  //bluetooth on Android
  bluetooth.begin(115200);  
  delay(100);
  Serial.println("started");
}

void loop()
{
  if(bluetooth.available())  // If the bluetooth sent any characters
  {
    // Send any characters the bluetooth prints to the serial monitor
    char c=bluetooth.read();
    Serial.println(c);

    // Send a message to the Android, in this case the value of Analog 0
    int a0=analogRead(0);
    bluetooth.println(String(a0));
    
    //check if n or f is pressed on the Android
    if (c=='n') { //turn on if 'n' is pressed
      digitalWrite(led,HIGH);
    } else if (c=='f') { //turn off if 'f' is pressed
      digitalWrite(led,LOW);
    }
  }
}
{% endhighlight %}

This sketch can be used for configuration of the Bluesmirf (taken from the [Sparkfun tutorial above](https://learn.sparkfun.com/tutorials/using-the-bluesmirf) but slightly modified):

{% highlight c++ %}
//will come soon
{% endhighlight %}

