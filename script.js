new Vue({
    el: '#app',

    data: {
        data: data,
        current: 1
    },

    mounted: function(){
        if(localStorage.getItem("index") === null){
            localStorage.setItem("index", 1);
        }
        this.current = localStorage.getItem("index");
    },

    methods: {

        next: function(){
            if(this.current != this.data.length){
                this.current++;
                localStorage.setItem("index", this.current);
            }
        },

        prev: function(){
            if(this.current != 1){
                this.current--;
                localStorage.setItem("index", this.current);
            }
        },

        questionFormatter: function(arr){
            
            var options = new Array();

            for(var i=1; i<arr.length; i++){

                var option = new Array();
                option[0] = arr[i];

                if(i==1){
                    option[1] = 'correct';
                }else{
                    option[1] = 'incorrect';
                }

                options.push(option);
            }

            options = shuffle(options);

            return options;
        }
    },

    computed: {

        currentF: {

            get: function(){
                return this.current;
            },

            set: function(newValue){
                if(newValue !=0 && newValue <= this.data.length){
                    this.current = newValue;
                }
            }

        }
        
    }

});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}