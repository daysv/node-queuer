import assert from 'assert'
import Queue from './index'

describe('Queue', ()=> {
    it('should execute the tasks', done=> {
        const queue = new Queue()
        var number = 0
        queue.once('end', ()=> {
            assert.equal(4, number)
            done()
        })
        queue.task(cb=> {
            ++number
            cb()
        }, cb=> {
            ++number
            cb()
        })
        queue.task(cb=> {
            number = number * 2
            cb()
        })
    });

    it('should execute the async tasks', done=> {
        const queue = new Queue()
        var number = 0
        queue.once('end', ()=> {
            assert.equal(2, number)
            done()
        })
        queue.task(cb=> {
            setTimeout(()=> {
                ++number
                cb()
            }, 20)
        }, cb=> {
            number = number * 2
            cb()
        })
    })

    it('should get queue',done=>{
        const queue = new Queue()
        queue.once('end',()=>{
            done()
        })
        queue.task(cb=>{
            setTimeout(()=>{
                cb()
            },10)
        },cb=>{
            setTimeout(()=>{
                cb()
            },10)
        })
        assert.equal(1,queue.queue.length)
    })

})

describe('Queue process error',()=>{
    const queue = new Queue()
    it('should listen error events', done=> {
        queue.on('error', err=> {
            assert.equal(err, 'Something is happening')
            done()
        })
        queue.task(cb=> {
            cb()
        }, cb=> {
            cb('Something is happening')
        })
    })

    it('should catch TypeError', done=>{
        try {
            queue.task()
        } catch (e) {
            try {
                queue.task([])
            } catch (e) {
                done()
            }
        }
    })
})

