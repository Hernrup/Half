
Handlebars.registerHelper("each_with_index", function (array, fn) {
    var total = array.length;
    var buffer = "";

    //Better performance: http://jsperf.com/for-vs-foreach/2
    for (var i = 0, j = total; i < j; i++) {
        var item = array[i];

        // stick an index property onto the item, starting with 1, may make configurable later
        item.index = i + 1;
        item.total = total;
        // show the inside of the block
        buffer += fn(item);
    }

    // return the finished buffer
    return buffer;

});


/**
{{#compare val="unicorns" tst="ponies" op="<"}}
I knew it, unicorns are just low-quality ponies!
{{/compare}}
**/
Handlebars.registerHelper('compare', function (options) {

    result = Common.compare(options.hash.val, options.hash.tst, options.hash.operator);

    if (result) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }

});


/**
{{#compare val="unicorns" tst="ponies" op="<"}}
I knew it, unicorns are just low-quality ponies!
{{/compare}}
**/
Handlebars.registerHelper('iif', function (options) {

    var trueVal = options.hash.true;
    var falseVal = options.hash.false;
    result = Common.compare(options.hash.val, options.hash.tst, options.hash.operator);

    if (result) {
        return trueVal;
    } else {
        return falseVal;
    }

});
