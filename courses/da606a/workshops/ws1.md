---
layout: instructions_en
code: da606a
title: Workshop 1
---

# Arduino introduction

## History

Introduced in 2005, developed by people from the Interaction Design Institute in Ivrea (Massimo Banzi), from Malmö University (David Cuarielles) and some more to replace expensive systems that broke all the time. 

- Developed for design students
- Now used by students, designers, artists, "makers", engineers...

## Arduino philosophy

- Cheap
- Easy learning curve
- Available for all platforms (win/mac/linux)
- Open software and open hardware

## Arduino technology

The base is a small circuit board with a micro controller, and inputs and outputs:

![](im1/ArduinoUno_R3_Front_450px.jpg)

The board is expandable by "shields". This is for example an Wifi shield that can be stacked on top of the Arduino. 

![](im1/A000058_front_450.jpg) 

There are many different shields available, both official shields, and third party shields. 

## Installing the IDE

The Arduino programs are called sketches and are made on any standard computer with the Arduino Integrated Development Environment. It is then downloaded to the Arduino, and after that, the Arduino can work by itself. The IDE can be downloaded at

[arduino.cc -> Download](http://arduino.cc/en/Main/Software#toc2)

Installation instructions:

- [Windows](http://arduino.cc/en/Guide/Windows)
- [Mac](http://arduino.cc/en/Guide/MacOSX)
- [Linux](http://playground.arduino.cc/Learning/Linux)

## The first "sketch": make an LED blink

```c
/*
  Blink
  Turns on an LED on for one second, then off for one second, repeatedly.
 
  This example code is in the public domain.
 */
 
// Pin 13 has an LED connected on most Arduino boards.
// give it a name:
int led = 13;

// the setup routine runs once when you press reset:
void setup() {                
  // initialize the digital pin as an output.
  pinMode(led, OUTPUT);     
}

// the loop routine runs over and over again forever:
void loop() {
  digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);               // wait for a second
  digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);               // wait for a second
}
```

## The breadboard
	
The breadboard is very useful for connecting the inputs and outputs of the Arduino. 

![](im1/breadboard_11.jpg)


## Sensors

Used as inputs. Can be a button, a light sensor, a sound sensor, a touch sensor and much more.

## Actuators

Used as outputs. An actuator can produce for example sound (a speaker), light (an LED) or movement (a motor).

## A simple musical instrument

Our first mission is to make a simple instrument or sound device behaving somewhat like a [Theremin](http://en.wikipedia.org/wiki/Theremin). We will connect a light sensor - a photo resistor - and small speaker to the Arduino. You can use a potentiometer if you don't have a photo resistor. 

- The speaker can be connected directly between ground and one of the digital outputs. Let's use digital pin 9
-  The photo resistor is connected in series with a 2k resistor between ground and +5V. The middle point is connected to an analog input. Let's use analog input 0. This connection is called a *volatage divider*. 

We will use the Tone Pitch Follower example in 

Examples->Digital->tonePitchFollower.

This example introduces some new important components:

- Serial.print() is very useful for testing and debugging (finding errors)
- The map() function is very useful for adjusting the range of values from sensors. 


```c
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
```

Next week we will dig deeper inte sensors and actuators. 
