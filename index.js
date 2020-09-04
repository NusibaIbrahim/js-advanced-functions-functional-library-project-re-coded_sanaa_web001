const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
  
      for (let idx = 0; idx < newCollection.length; idx++)
        iteratee(newCollection[idx])
  
      return collection
    },

     map: function(collection, iteratee) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArr = []

      for (let idx = 0; idx < collection.length; idx++)
        newArr.push(iteratee(collection[idx]))

      return newArr
    },

		reduce: function(c = [], callback = () => {}, acc) {
  		let collection = c.slice(0)
  
  		if (!acc) {
  			acc = collection[0]
  			collection = collection.slice(1)
  		}
  
  		let len = collection.length;
  
  		for (let i = 0; i < len; i++) {
  			acc = callback(acc, collection[i], collection)
  		}
  		return acc;
	 },
	 
	 find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for (let idx = 0; idx < collection.length; idx++)
        if (predicate(collection[idx])) return collection[idx]

      return undefined
    },
    
    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArr = []

      for (let idx = 0; idx < collection.length; idx++)
        if (predicate(collection[idx])) newArr.push(collection[idx])

      return newArr
    },
    
        size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

first: function(collection, stop=false) {
      return (stop) ? collection.slice(0, stop) : collection[0]
    },



    functions: function() {

    },


  }
})()

fi.libraryMethod()
