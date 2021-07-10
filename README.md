# JSON-crash-course
 
JSON has pretty much replaced XML in sending data back and forth and when working with restful APIs.
## What is JSON?
- Javascript Object Notation
- Its a lightweight data-interchange format
- its used to send data back and forth to a server as text
- it is based on javascript object literals so if you've used javascript in the past, you may have worked with something that resembles JSON already.
- its often used with AJAX(Asynchronous JS and XML) which is used to change data back and forth to a server without refreshing the page.
- Its easy to read and write 
- Can be used with most mordern PL

## Data types
- Number: No difference beteeen integer and floats
- String: String of unicode characters. Use double quotes
- Boolean: True or false
- Array: Ordered list of 0 or more values. Arrays are also wrapped in square brackets [] just like in regular JS
- Object: We can also embed child objects which are Unordered collection of key/value pairs. We can also have multi tiered objects embedded in an object.
- Null: Empty value 
## JSON Syntax rules
- Uses key/value pairs - {"name":"andrew"}
- Uses double quotes around KEY and VALUE. In JS double quotes only required on the value. We need double quotes on both to have valid JSON.
- Must follow the specified data types
- File type is ".json"
- MIME type associated with JSON is "Application/json". If you are working with a RESTful API and you want to send JSON. Thats the MIME type. 

## JSON example
```
{
    "name":"Andrew Bwogi",
    "age":35,
    "address":{
            "street" : "5 main st",
            "city" : "Los Angeles"
    },
    "children":["Myra","Grace","Loy","Emmanuel","Gabriel","Nankya","Elai"]
}
```
### explanation
- Its a single JSON object with a person
- Its wrapped in curly brackets and it uses key value pairs.
- name uses a string of Andrew Bwogi and must be in double quotes
- second one is the number,it doesnt have double quotes around it.
- the next is an address which is actually an embedded object
- and the last is an array of strings
