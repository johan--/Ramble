'use strict';

module.exports = function(collection, relations, ids) {
    return collection.query().whereIn('id', ids).then(function(models) {
        collection.add(models);

        return collection.load(relations);
    });
};
