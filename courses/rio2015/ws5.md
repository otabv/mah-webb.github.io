---
layout: instructions
code: rio2015
title: Workshop 5
---

# Workshop 5 - Bluetooth

Today we will have a look at Bluetooth. Bluetooth is a low power communication technology originally developed by Ericsson Mobile in Lund (wow, Bluetooth was developed in my hometown, and Arduino partly developed in the town where I work). It is named after a Danish and Norwegian king from the Viking era, *[Harald Blåtand](http://en.wikipedia.org/wiki/Harald_Bluetooth)*. Blåtand means Bluetooth. A very interesting book where Harald Blåtand is featured is [The Long Ships](http://en.wikipedia.org/wiki/The_Long_Ships) by Swedish author [Frans G. Bengtsson](http://en.wikipedia.org/wiki/Frans_G._Bengtsson). 

![](gorm.jpg)

[Bluetooth Low Energy](http://en.wikipedia.org/wiki/Bluetooth_low_energy) is a recent version of Bluetooth that uses less energy than the original version, and is also easier to connect to various devices such as mobile phones. 

As an introduction to the Bluetooth module we will use today, please read [this tutorial from Sparkfun](https://learn.sparkfun.com/tutorials/using-the-bluesmirf).

Install the Bluetooth Terminal Android application from Next Prototypes:

<https://play.google.com/store/apps/details?id=nextprototypes.bluetoothterminal>


**NOTE** There are several applications with the same name, make sure to use the one from Next Prototypes.

## Communcation between Android and Arduino

Now an Android phone can communicate with an Arduino with a Bluesmirf module. It might be necessary to pair the android phone and the Bluesmirf first, see **Finding** and **Pairing** below. 

Use this Arduino sketch to communicate between Android and Arduino:

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

## Configuration of Bluesmirf

This sketch can be used for configuration of the Bluesmirf (taken from the [Sparkfun tutorial above](https://learn.sparkfun.com/tutorials/using-the-bluesmirf) but slightly modified):

{% highlight c++ %}
/*
  Example Bluetooth Serial Passthrough Sketch
 by: Jim Lindblom
 SparkFun Electronics
 date: February 26, 2013
 license: Public domain

 This example sketch converts an RN-42 bluetooth module to
 communicate at 9600 bps (from 115200), and passes any serial
 data between Serial Monitor and bluetooth module.
 */
#include <SoftwareSerial.h>  

int bluetoothTx = 2;  // TX-O pin of bluetooth mate, Arduino D2
int bluetoothRx = 3;  // RX-I pin of bluetooth mate, Arduino D3

SoftwareSerial bluetooth(bluetoothTx, bluetoothRx);

void setup()
{
  Serial.begin(9600);  // Begin the serial monitor at 9600bps

  bluetooth.begin(115200);  // The Bluetooth Mate defaults to 115200bps
  bluetooth.print("$");  // Print three times individually
  bluetooth.print("$");
  bluetooth.print("$");  // Enter command mode
  delay(100);  // Short delay, wait for the Mate to send back CMD
  bluetooth.println("U,9600,N");  // Temporarily Change the baudrate to 9600, no parity
  // 115200 can be too fast at times for NewSoftSerial to relay the data reliably
  bluetooth.begin(9600);  // Start bluetooth serial at 9600
}

void loop()
{
  if(bluetooth.available())  // If the bluetooth sent any characters
  {
    // Send any characters the bluetooth prints to the serial monitor
    Serial.print((char)bluetooth.read());  
  }
  if(Serial.available())  // If stuff was typed in the serial monitor
  {
    // Send any characters the Serial monitor prints to the bluetooth
    bluetooth.print((char)Serial.read());
  }
  // and loop forever and ever!
}
{% endhighlight %}

## Finding Bluetooth devices

This sketch will find available bluetooth devices:

{% highlight c++ %}
/* bluesmirf_find
   find address of bluetooth devices */

#include <SoftwareSerial.h>  

int bluetoothTx = 2;  // TX-O pin of bluetooth mate, Arduino D2
int bluetoothRx = 3;  // RX-I pin of bluetooth mate, Arduino D3

SoftwareSerial bluetooth(bluetoothTx, bluetoothRx);

void setup()
{
  Serial.begin(9600);  // Begin the serial monitor at 9600bps
  delay(1000);
  Serial.println("started");

  bluetooth.begin(115200);  // The Bluetooth Mate defaults to 115200bps
  bluetooth.print("$");  // Print three times individually
  bluetooth.print("$");
  bluetooth.print("$");  // Enter command mode
  delay(100);  // Short delay, wait for the Mate to send back CMD
  bluetooth.println("U,9600,N");  // Temporarily Change the baudrate to 9600, no parity
  // 115200 can be too fast at times for NewSoftSerial to relay the data reliably
  bluetooth.begin(9600);  // Start bluetooth serial at 9600
  bluetooth.print("$");  // Print three times individually
  bluetooth.print("$");
  bluetooth.print("$");  // Enter command mode
  delay(100);  // Short delay, wait for the Mate to send back CMD
  Serial.println("Search for bluetooth devices");
  bluetooth.println("I");
}

void loop()
{
  if(bluetooth.available())  // If the bluetooth sent any characters
  {
    // Send any characters the bluetooth prints to the serial monitor
    Serial.print((char)bluetooth.read());  
  }
  if(Serial.available())  // If stuff was typed in the serial monitor
  {
    // Send any characters the Serial monitor prints to the bluetooth
    bluetooth.print((char)Serial.read());
  }
  // and loop forever and ever!
}
{% endhighlight %}

## Pairing with a bluetooth device

This sketch will pair with a device found by the previous sketch

{% highlight c++ %}
/* bluesmirf_pair
   pair bluesmirt with android devices */

#include <SoftwareSerial.h>  

int bluetoothTx = 2;  // TX-O pin of bluetooth mate, Arduino D2
int bluetoothRx = 3;  // RX-I pin of bluetooth mate, Arduino D3

SoftwareSerial bluetooth(bluetoothTx, bluetoothRx);

void setup()
{

  bluetooth.begin(115200);  // The Bluetooth Smirf defaults to 115200bps
  bluetooth.print("$");  // Print three times individually
  bluetooth.print("$");
  bluetooth.print("$");  // Enter command mode
  delay(100);  // Short delay, wait for the Mate to send back CMD
  Serial.println("Search for bluetooth devices");
  bluetooth.println("C,XXXXXXXXXXXX"); //change XXX to address of android phone
}

void loop()
{
  // and loop forever and ever!
}
{% endhighlight %}

## Further work

If you want to develop your own Android apps, or modify existing apps, check the following links:

- [Bluesmirf Demo](https://github.com/jeffboody/bluesmirf-demo)
- [App inventor](http://www.appinventor.org) (Thank you Pedro Zohrer for the link)
- [BlueTooth Link with auto-detect & connect](http://www.instructables.com/id/BlueTooth-Link-with-auto-detect-connect/)
- [Build your own Android app with Processing and communicate with Arduino](http://arduinobasics.blogspot.com.au/2013/03/arduino-basics-bluetooth-android.html)

