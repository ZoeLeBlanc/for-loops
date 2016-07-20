for (var i = 5; i < 120; i += 10){
	console.log("Current value is " + i);
}

for (var i = 4096; i > 1; i /= 2){
	console.log("Current value is " + i);
}

var Presidents = [
'George Washington',
'John Adams',
'Thomas Jefferson',
'Barack Obama',
'Hilary Clinton'
];

for (var i = 0; i < Presidents.length; i += 1){
	var list = ("President #" + (i + 1) + " was ") +Presidents[i];
	console.log(list);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}
for ( var prop in antSpecies){
	console.log(prop);
}