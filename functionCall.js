        let stars = [
    {actors: 'Tom', portrayed: 'hero'},
    {actor:'kerem bursin', portrayed:'an amazing actor '}
]
for(var i=0; i < stars.length; i++){
    (function(i) {
        this.display = function(){
            console.log(this.actor+ 'is' + this.portrayed);

        }
        this.display();

    }).call(stars[i] , i)
}
