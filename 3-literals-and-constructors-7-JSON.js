// JSON

var jstr = '{ "myKey" : "myValue" }',
	jsObj;

console.info(jstr);

// JSON.parse

jsObj = JSON.parse(jstr);

console.info(jsObj);

console.log(jsObj.myKey);

// JSON.stringify

console.log(JSON.stringify(jsObj));