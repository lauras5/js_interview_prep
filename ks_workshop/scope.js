// SCOPE: 
// WHERE TO LOOK FOR THINGS
// WHO IS DOING THE LOOKING

var foo = "bar"; // global scope

function bar() {
  var foo = "baz";
}

function baz(foo) {
  foo = "bam";
  bam = "yay";
}
