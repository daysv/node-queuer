# node-queuer
  [![npm version](https://img.shields.io/npm/v/node-queuer.svg?style=flat)](https://www.npmjs.com/package/node-queuer)
  [![Build Status](https://travis-ci.org/daysv/node-queuer.svg?branch=master)](https://travis-ci.org/daysv/node-queuer)
  

Queue of tasks in JavaScript

# Install
```bash
$ npm i node-queuer -save
```

# Example
```js
import Queue from 'node-queuer'
// or
var Queue = require('node-queuer').default

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