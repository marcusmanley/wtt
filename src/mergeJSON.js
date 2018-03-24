

var json1 = '/data.json'; //with path
debug(json1);
var json2 = './MNDist1.json';

    arrayList = [], obj_c_processed = [];

for (var i in json1) {
    var obj = {Name: json1[i].District, Year1: json1[i].year1};
    debug(JSON.stringify(obj));

    for (var j in json2) {
        if (json1[i].Name == json2[j].Name) {
            obj.circle = json2[j].circle;
            obj_c_processed[json2[j].Name] = true;
        }
    }

    obj.circle = obj.circle || 'no';
    arrayList.push(obj);
}

for (var j in json2){
    if (typeof obj_c_processed[json2[j].Name] == 'undefined') {
        arrayList.push({Name: json2[j].Name, Geometry: json2[j].Geometry, circle: json2[j].circle});
    }
}

debug(JSON.stringify(arrayList));