---
layout: instructions_en
code: da606a
title: Workshop 6
---

# Workshop 6 - Getting internet access behind routers and Introduction to the project

##How to connect behind a router

Our Arduinos with Ethernet shields have a global static IP-address that can be accessed from everywhere, not only from within the network of Malmö university. However, in the real world this is often not the case. Most times, devices are connected behind routers with a local IP-address inside the local network, and another IP-address (the IP-address of the router) outside of the router. This is usually fine for applications acting as web clients, but it does not work for applications acting as web servers. There are various ways of solving this, such as

- port forwarding
- using services such as [Spacebrew](http://docs.spacebrew.cc), [Autobahn](http://autobahn.ws), [Yaler](https://yaler.net), [Temboo](https://temboo.com) or [OpenHAB](http://www.openhab.org). There is some more info on this in [this blog post](http://asynkronix.se/internet-of-things-with-arduino-yun-and-yaler/).

##Final project 

The remaining weeks of the course will be devoted to your own project. The project can be done by one student or a group of 2 students. Your are quite free to choose your topic for the project but there are some requirements:


