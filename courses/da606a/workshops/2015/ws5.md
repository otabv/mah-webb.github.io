---
layout: instructions_en
code: da606a
title: Workshop 5
---

# Workshop 5 - Visualizing Xively Data

This week you will have to work on your own. The challenge for this week is to use Processing to visualize data from Xively. A rough processing sketch that reads data from Xively is provided below. 

Processing is a programming environment based on Java, that shares the same philosophy as Arduino. As you will see the IDE for processing is very similar to the IDE of Arduino. 

## Preparations

1. Install Processing on your computer (<http://processing.org>) and read the [intro to processing](http://www.processing.org/tutorials/gettingstarted/)
2. Xively will send data in json format. Read this [intro to json](http://www.w3schools.com/json/) if you are not already familiar with json. 
3. Read the [json for processing reference](http://www.processing.org/reference/JSONObject.html) 
4. Read about [Xively data in json format](https://xively.com/dev/docs/api/data/read/single_feed/)
5. Read about [Xively historical data](https://xively.com/dev/docs/api/quick_reference/historical_data/)

## Assignment

The assignment is as following: Connect your Arduino to some sensor (for example a light sensor) and connect it to Xively for at least 24 hours. 

Modify the Processing sketch below so that it reads data from Xively for the last 24 hours and makes som kind of visualization of the data. 

Submit your solution on It's learning not later than Monday 23 February 23.55. 

The historical data is stored in a json array that is stored by the processing sketch in the file data.txt in the same folder as the sketch itself. Have a look at it to see the format. It might look something like this:

{% highlight json %}
{"id":190399412,"title":"testdevice","private":"false","feed":"https://api.xively.com/v2/feeds/190399412.json","status":"live","updated":"2015-02-12T14:02:07.902223Z","created":"2015-02-11T09:51:57.420430Z","creator":"https://xively.com/users/bop","version":"1.0.0","datastreams":[{"id":"sensor7","current_value":"645","at":"2015-02-12T14:02:07.851935Z","max_value":"1023.0","min_value":"0.0","datapoints":
[{"value":"514","at":"2015-02-12T13:00:50.098185Z"},{"value":"516","at":"2015-02-12T13:01:52.775045Z"},{"value":"518","at":"2015-02-12T13:02:55.466381Z"},{"value":"521","at":"2015-02-12T13:03:58.144429Z"},{"value":"522","at":"2015-02-12T13:04:50.383877Z"},{"value":"525","at":"2015-02-12T13:05:53.097647Z"},{"value":"527","at":"2015-02-12T13:06:55.789043Z"},{"value":"529","at":"2015-02-12T13:07:58.469460Z"},{"value":"531","at":"2015-02-12T13:08:50.698089Z"},{"value":"533","at":"2015-02-12T13:09:53.367837Z"},{"value":"536","at":"2015-02-12T13:10:56.069740Z"},{"value":"538","at":"2015-02-12T13:11:58.753527Z"},{"value":"540","at":"2015-02-12T13:12:50.975844Z"}]
}],"product_id":"n_IMzJrRIGDCK_7s8khZ","device_serial":"XYXZ2NDKRAHH"}
{% endhighlight %}

{% highlight java %}
//This sketch reads data from xively at a regular interval specified by updateinterval

import processing.net.*;

String apiKey="your-api-key";
String feedId="your-feed-id";

int previousMillis=0;
int updateinterval=10000; //this is how often in milliseconds that data is read from xively

void setup() {
  size(200, 200); //Open a window 200x200 pixels;
}

void draw() {
  int currentMillis = millis();

  if (currentMillis - previousMillis >= updateinterval) {
    //Read from xively at a certain interval
    JSONObject json=readXively(apiKey,feedId);
    
    //The result is returned as a jSon-object. The complete jSon text is also saved in a textfile called data.txt
    //in the same folder as the processing sketch
    
    //Here the json is parsed, to find title and value of sensor.
    //First the title which is simple:
    String title = json.getString("title");
    
    //Then parse the value, which is in a json-array, making it a little bit more complicated
    JSONArray stream=json.getJSONArray("datastreams");
    JSONObject sensor=stream.getJSONObject(0);
    int value=sensor.getInt("current_value");
    
    //change the background color of the window to darker or lighter depending on the sensor value
    background(map(value,0,1023,255,0));
    
    //make the text red, size 20:
    fill(255,0,0);
    textSize(20);
    text(title,10,30);
    text(value,10,80);
    int s = second();  // Values from 0 - 59
    int m = minute();  // Values from 0 - 59
    int h = hour();    // Values from 0 - 23
    text(h+":"+m+":"+s,10,130);

    previousMillis=currentMillis;
  }
}



JSONObject readXively(String apiKey, String feedId) {
  //This method reads data from xively and returns a JSONObject. It also stores the json data as text in data.txt
  //PLEASE NOTE: if xively data includes special multibyte data like åäö, this method might crash.
  //possible solution: use data = data + c.readChar(); instead of data = data + c.readString();

  //see https://xively.com/dev/docs/api/quick_reference/historical_data/ for format ov start, end and interval
  String start="your-start-time";
  String end="your-end-time";
  String interval="your-interval";  //this is the interval in seconds between historical datapoints read from xively. 



  String data="";
  Client c = new Client(this, "api.xively.com", 80); // Connect to server on port 80
  c.write("GET /v2/feeds/");
  c.write(feedId);
  c.write("?start=");
  c.write(start);
  c.write("&end=");
  c.write(end);
  c.write("&interval=");
  c.write(interval);  
  c.write(" HTTP/1.1\r\n");
  c.write("Host: api.xively.com\r\n");
  c.write("X-PachubeApiKey: ");
  c.write(apiKey);
  c.write("\r\n");  
  c.write("\r\n"); 
  
  //the request is finished, now wait for the reply from xively
  boolean finished=false;
  boolean headerReceived=false;
  boolean contentLengthReceived=false;
  int contentLength=0;
  int endOfHeader=0;

  while (!finished) {
    while (c.available () > 0) { // If there's incoming data from the client...
      data = data + c.readChar(); //add it to the data string

    }
    
    //here are several lines necessary to detect when the reply is finished
    if (!contentLengthReceived) {
      String cont="Content-Length:";
      //look for the text Content-Length in the returned data
      int contentLengthPosition=data.indexOf(cont);
      if (contentLengthPosition>0) {
        int endOfLine=data.indexOf("\r\n", contentLengthPosition);
        if (endOfLine>0) {
          String contentLengthString=data.substring(contentLengthPosition+cont.length(), endOfLine);
          contentLength=Integer.parseInt(contentLengthString.trim());
          contentLengthReceived=true;
        }
      }
    }
    
    //the data is sent directly after the header. The end of header is marked by \r\n\r\n
    if (contentLengthReceived) {
      endOfHeader=data.indexOf("\r\n\r\n");
      if (endOfHeader>0) {
        headerReceived=true;
      }
    }
    if (headerReceived) {
      //check if the number of received data matches the content length. If it does, the reply is complete
      if (data.length()-endOfHeader-3>contentLength) {        
        finished=true;
      }
    }
  }
  //c.stop();


  //remove the header, keep the json data
  data=data.substring(data.indexOf("{"), data.length());
  
  println(data);  
  
  
  //save the json data in data.txt
  String[] list=new String[1];
  list[0]=data;
  saveStrings("data.txt", list);

  //save the json data in a JSONObject
  JSONObject json = new JSONObject();
  json = loadJSONObject("data.txt");
  return json;
}
{% endhighlight %}