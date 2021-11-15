var Something = {
  cool: function()
  {
    this.greeting = "Hello World!",
    this.count = this.count ? this.count + 1 : 1 
  }
}

Something.cool();
Something.cool();
console.log(Something.greeting);
console.log(Something.count);

var Another = {
  cool: function()
  {
    Something.cool.call( this );
  }
}

Another.cool();
console.log(Another.greeting);
console.log(Another.count);