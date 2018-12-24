function Middleware() {}

Middleware.prototype.use = function() {}

Middleware.prototype.next = function() {}

Middleware.prototype.go = function(cb) {
  cb && cb()
}
