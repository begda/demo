const chokidar = require('chokidar')
const consola = require('consola')

    // .on('add', path => console.log(`File ${path} has been added`))
    // .on('change', path => console.log(`File ${path} has been changed`))
    // .on('unlink', path => console.log(`File ${path} has been removed`))
    // .on('addDir', path => console.log(`Directory ${path} has been added`))
    // .on('unlinkDir', path => console.log(`Directory ${path} has been removed`))
    // .on('error', error => console.log(`Watcher error: ${error}`))
    // .on('ready', () => console.log('Initial scan complete. Ready for changes'))
    // .on('all', (event, path) => console.log(event,path))
    // .on('raw', (event, path, details) => {
    //     log('Raw event info:', event, path, details);
    // });

class Watcher {
    constructor(dir, opt) {
        this._watcher = this._newWatcher(dir, opt)
    }

    // 参数必填判断
    _require(param) {
        consola.error(`${param} 是必须的`)
        throw new Error(`必须的`)
    }

    _isFunction(fn) {
        if (typeof fn != "function") {
            throw new Error(`必须是一个方法`)
        }
    }

    _newWatcher(dir = this._require('方法 newWatcher的 dir'), opt = {ignored: /[\/\\]\./, persistent: true}) {
        return chokidar.watch(dir, opt);
    }

    add(fn = this._require('方法 add的 fn')) {
        this._isFunction(fn)
        this._watcher.on('add', (path) => {
            // consola.info('File', path, ' added');
            fn(path)
        })
        return this;
    }

    addDir(fn = this._require('方法 addDir的 fn')) {
        this._isFunction(fn)
        this._watcher.on('addDir', (path) => {
            // consola.info('File', path, ' addDir');
            fn(path)
        })
        return this;
    }

    change(fn = this._require('方法 change的 fn')) {
        this._isFunction(fn)
        this._watcher.on('change', (path) => {
            // consola.info('File', path, ' change');
            fn(path)
        })
        return this;
    }

    unlink(fn = this._require('方法 unlink的 fn')) {
        this._isFunction(fn)
        this._watcher.on('unlink', (path) => {
            // consola.info('File', path, ' unlink');
            fn(path)
        })
        return this
    }

    unlinkDir(fn = this._require('方法 unlinkDir的 fn')) {
        this._isFunction(fn)
        this._watcher.on('unlinkDir', (path) => {
            // consola.info('File', path, ' unlinkDir');
            fn(path)
        })
        return this
    }

    error(fn = this._require('方法 error的 fn')) {
        this._isFunction(fn)
        this._watcher.on('error', (path) => {
            // consola.info('File', path, ' error');
            fn(path)
        })
        return this
    }

    ready(fn = this._require('方法 ready的 fn')) {
        this._isFunction(fn)
        this._watcher.on('ready', (path) => {
            // consola.info('File', path, ' ready');
            fn(path)
        })
        return this
    }

    raw(fn = this._require('方法 raw的 fn')) {
        this._isFunction(fn)
        this._watcher.on('raw', (path) => {
            // consola.info('File', path, ' raw');
            fn(path)
        })
        return this
    }

    all(fn = this._require('方法 add的 fn')){
        this._isFunction(fn)
        this.add(fn)
        this.change(fn)
        this.addDir(fn)
        this.unlink(fn)
        this.unlinkDir(fn)
        this.error(fn)
        this.ready(fn)
        this.raw(fn)
        return this
    }
}

module.exports = (dir, opt) => {
    return new Watcher(dir, opt)
}