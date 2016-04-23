import {EventEmitter} from 'events'

export default class Queue extends EventEmitter {
    constructor() {
        super()
        this._queue = []
        this._process = false
    }

    get queue() {
        return this._queue
    }

    task(...args) {
        if (args.length === 0) throw TypeError('Function required')
        args.forEach((fn)=> {
            if (fn.constructor.name !== 'Function') throw TypeError('Function required')
            this._queue.push(fn)
        })
        if (!this._process && this._queue.length) {
            this._apply()
        }
    }

    _apply() {
        this._process = true;
        this._queue.shift().call(this, err=> {
            if (err) this.emit('error', err)
            this._process = false
            if (!this._process && this._queue.length) {
                setImmediate(()=> {
                    this._apply.call(this)
                })
            } else if (this._queue.length === 0) {
                this.emit('end')
            }
        })
    }
}

 