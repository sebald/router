angular.module('myApp.server', [])
.service('Server', ['$q', ServerService]);



function ServerService ( $q ) {
  var docs = [{
        title: 'Note to self',
        content: 'Everyone can see this note!'
      }, {
        title: 'Secret Letter',
        content: 'This is secret!'
      }, {
        title: 'Inaccessible ',
        content: '---'
      }];

  this.getAllDocs = function () {
    var deferred = $q.defer();
    setTimeout(function() {
      deferred.resolve(docs.map(function ( doc, idx ) {
        return { id: idx, title: doc.title };
      }));
    }, 20);
    return deferred.promise;
  };


  this.getDoc = function ( id ) {
    var deferred = $q.defer();
    setTimeout(function() {
      if( id != 2 ) {
        deferred.resolve(docs[id]);
      } else {
        deferred.reject({
          code: 404,
          message: 'No access!'
        });
      }
    }, 250);
    return deferred.promise;
  };
}
