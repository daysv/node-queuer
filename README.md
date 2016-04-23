# node-queuer

Queue of tasks in JavaScript

# Install
```bash
$ npm i node-queue -save
```

# Example
```js
import Queue from 'node-queue'
// or
var Queue = require('node-queue').default

var queue = new Queue()

queue.on('error', function(err){ })

queue.on('end', function(){ })

// It will auto start
queue.task(function(done){
    setTimeout(function(){
        done()
    },1000)
})

queue.task(function(done){
    setTimeout(function(){
        done()
    },1000)
},function(done){
    done()
})

queue.queue // Get current queue

```

# LICENSE
MIT