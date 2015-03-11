var prototypeNamespace = prototypeNamespace || {};

prototypeNamespace.Validation = function (eq) {
    this.eqCtl = document.getElementsByClassName(eq);
};

prototypeNamespace.Validation.prototype = function () {
    // private members
    var validate = function () {
        for (this.i = 0; this.i < this.eqCtl.length; this.i++) {
            var newdiv = document.createElement('div');
            var divIdName = 'my' + this.i + 'Div';
            newdiv.setAttribute('id', divIdName);
            newdiv.innerHTML = 'Element Number ' + this.i + ' has been added! "' + divIdName;

            this.eqCtl[this.i].appendChild(newdiv);

            var divToRemove = document.getElementById(divIdName);
            var d = divToRemove.parentNode;
            d.removeChild(divToRemove);
        }
    };

    // Add/Remove element (http://jsperf.com/basic-prototyping-form-validation)
    var addremove = function () {
        for (this.i = 0; this.i < this.eqCtl.length; this.i++) {
            var newdiv = document.createElement('div');
            var divIdName = 'my' + this.i + 'Div';
            newdiv.setAttribute('id', divIdName);
            newdiv.innerHTML = 'Element Number ' + this.i + ' has been added! "' + divIdName;

            this.eqCtl[this.i].appendChild(newdiv);

            var divToRemove = document.getElementById(divIdName);
            var d = divToRemove.parentNode;
            d.removeChild(divToRemove);
        }
    };

    // public members
    return {
        validate: validate,
        addremove: addremove
    };
}();