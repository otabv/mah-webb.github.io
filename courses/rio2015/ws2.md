---
layout: instructions
code: rio2015
title: Workshop 2
---

# Workshop 2 - Sensors and Actuators

## Sensors

Sensors are the inputs to the Arduino. A normal computer has typically a keyboard and a mouse as input. The Arduino can have a wide range of sensors as input, for example:

- simple button or switch
- pressure sensor
- light sensor
- potentiometer
- temperature sensor
- humidity sensor
- touch sensor
- microphone

The only thing the Arduino can sense, or measure, is *voltage* . Some sensors give a *voltage* directly, but many sensors don't give a voltage directly, and that means that we have to make an electric circuit that will transform the output of the sensor to voltage. Some sensors such as potentiometers, light sensors, pressure sensors, buttons and switches give a variable resistance as output. A variable resistance can easily be converted to a voltage with the help of a *voltage divider*.

We start with a **push button**. A push button has two states

- pushed - zero resistance 
- not pushed - infinite resistance 

To connect a push button, you need something called a *pull up resistor*. (Actually you can also use a pull down resistor, or even a built-in pull up resistor in the Arduino, as described in [this tutorial](http://arduino.cc/en/Tutorial/DigitalPins)).

![](button.png)

A good value for the pull up resistor is somewhere around 10k (10k is short for 10k&#937; which in turn is short for 10000 ohms). The pull up resistor makes sure that the input of the Arduino will be 5 V when the button is **not** pushed and 0 V when the button **is** pushed. 

The state of the button can be detected by the following Arduino code:

{% highlight c++ %}
int buttonPin = 5; //button connected to pin 5 with pull up resistor

void setup() {                
   pinMode(buttonPin, INPUT);     
}

void loop() {
  int val=digitalRead(buttonPin);
  //the variable val will be: 
  // HIGH when the button is not pushed
  // LOW when the button is pushed
}
{% endhighlight %}

A **light sensor** or **photo resisitor** can be connected in the same way as the button. A photo resistor has a changing resistance when the light is changing. If it is connected with a pull up resistor, the voltage will change between 0 V and 5 V depending on the light. The photo resistor is an *analog* sensor while the push button is a *digital* sensor, and must be connected to the analog input of the Arduino. 

## Actuators

Actuators are things that will produce some action that humans usually can detect. Actions can for example be sound, light or movement. Examples of actuators are:

- light sources (lamps, LEDs)
- motors (servo motors, DC motors, stepper motors)
- speakers (magnetic or piezo speaker)
- heating elements

Small speakers can be connected directly to the Arduino, between ground (GND) and one of the digital output pins. But wait, aren't speakers analog? Yes they are, but it is possible to produce analog output on on the digital pins with something called pulse widht modulation, PWM. More on that later.  

An LED can be connected almost directly to the Arduino, but it must be connected in series with a resistor of ca 200&#937;, otherwise the Arduino might be damaged. 

Really small motors can also be connected directly to the Arduino, but larger motors need som kind of amplification and external power source to work.

Let's connect a push button and a LED to the Arduino.

![](buttonandled.png)

This sketch will *turn off* the LED when the button is pushed. 

{% highlight c++ %}
int buttonPin = 5; //button connected to pin 5 with pull up resistor
int ledPin = 8;

void setup() {                
   pinMode(buttonPin, INPUT);     
   pinMode(ledPin, OUTPUT);     

}

void loop() {
  int val=digitalRead(buttonPin);
  //the variable val will be: 
  // HIGH when the button is not pushed
  // LOW when the button is pushed
  digitalWrite(ledPin,val);
}
{% endhighlight %}

## Analog and Digital

Something digital can be in two states, HIGH or LOW, which often is the same as 5V or 0V (there are also Arduinos where HIGH is 3.3 V).

Analog values on the other hand can be anything. Arduino can measure analog voltages between 0V and 5V, and the analog voltage can be anything between that. However, computers can only handle  *binary digits* or *bits*. A bit can be 1 or  0 where 1 is HIGH, and 0 is LOW. A collection of bits can be used to represent whole numbers, integers. 10 bits can represent the numbers 0 to 1023, and the Arduino converts any voltage that is connected to the analog inputs to a whole number between 0 and 1023. 

- if the input is 0 V, this is represented by the number 0
- if the input is 5 V, this is represented by 1023
- if the input is for example 2 V, this is represented by 2*1023/5 = 409

The conversion from analog to digital is made by an *ADC*, *analog-to-digital-converter*. 

