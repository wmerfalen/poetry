var lyrics = [];
function lifo_stack(){
    this.stack = [];
    this.push = function(item){
        this.stack.push(item);
    };
    this.pop = function(){
        
    };
};
function person(){ 
        this.refer_to_me= 'he';
        this.listen_to= function(words){
            var say = lyrics.pop();
            var he = lyrics.pop();
            lyrics.push('listen');
            lyrics.push('to');
            for(var i in words){
                lyrics.push(words[i]);
            }
            lyrics.push(he);
            lyrics.push(say);
        };
        this.say= function(){
            lyrics.push('say');
        };
};
function i(){
    person.call(this);
    this.refer_to_me =  'I';
    this.d =  function(){
        lyrics.push(this.refer_to_me + '\'d');
        return this;
    };
    return this;
};
i.prototype = Object.create(person.prototype);
i.prototype.constructor = i;
var the = {
    'words': function(words){
        return ['the','words'];
    }
};
function he(){
    i.call(this);
    this.refer_to_me= 'he';
    return this;
}
    
he.prototype = Object.create(i.prototype);
he.prototype.constructor = he;
i().d().listen_to(the.words(he().d().say()));
console.log(lyrics.join(' '));
