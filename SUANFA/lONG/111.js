function setName(obj) {
    obj.name = 'li';
    obj = new Object();
    obj.name = 'wang';
    alert(obj.name);
}

var person = new Object();
setName(person);
alert(person.name);