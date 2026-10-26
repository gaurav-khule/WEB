// Dom Event Listener
// use to handel event

document.querySelector("button").addEventListener("click", function () {
  let cityName = document.getElementById("x1").value;
  if (cityName == "") {
    document.getElementById("mausam").innerHTML = "City Name Required";
  } else {
    const APIKEY = "743199e268b4ac8f30feaf7a9c8a9d1b";
    const XHR = new XMLHttpRequest();
    console.log(XHR);
    console.log(XHR.readyState, XHR.status);

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`;
    XHR.onreadystatechange = function () {
      console.log(XHR.readyState, XHR.status);
      if (XHR.readyState == 4 && XHR.status == 200) {
        let result = XHR.responseText;
        console.log(result);
        //   Convert JSON to JS
        let info = JSON.parse(result);
        console.log(info);
        //   Display
        document.getElementById("mausam").innerHTML = `
          <b>City</b> = ${info.name.city}<br>
          <b>Temperature</b> = ${info.main.temp}<br>
          <b>Wind Speed</b> = ${info.wind.speed}<br>
          `;
      }
    };
    //open("GET", APIPATH)
    XHR.open("GET", API);

    // send() -- it will start the process
    XHR.send();
  }
});

/*
    -- Ajax -- 

    Asyncronous javascript & xml
    It works on Client Slide (on browser)
    Its a technique, uses exisitng technology
    (Javascript - for data transfer, HTMl-CSS Fro mark up, Presentation)
    without reloading an entire web page (data can be transfered from server to client OR client to server)
    only part of the web page will up updated
    "XMLHTTPRequest" Object i used to perform Ajax
    TO tansfer data in modern practice we use "JSON"

    XMLHttpRequest has following methods and properties

    open() method("get", apiurl) -- to connect apis or server side side web pages

    send() --- send a requeste to the api or server

    readyState -- it generates cycle from 0 to 4
    0  -  request is not initialized
    1  -  request has been setup (when you perform open() method)
    2  -  request has been sent to the server (when you perform send() method)
    3  -  request is in prograss mode in server side (i.e. api is doing work)
    4  -  reuqest cycle complete with response or error (values back to javascripts)

    all states will be detected by "onreadystatechange" event

    final value from api will be received (once readystate-4) in
    -----------------------------------------------------------------
    "responseText Property" (JSON or string format)
    "responseXML Property" (XML formate)

    Status Codes -- 
    200 : OK (success)
    201 : Created
    301 : Moved Permanently (Page Redirection)
    404 : Page Not Found
    403 : Forbidden Access (For Auth Process)
    400 : Bad request (your mistake)
    500 : Internal Server error 

*/
