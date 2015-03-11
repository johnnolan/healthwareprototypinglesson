var prototypeNamespace = prototypeNamespace || {};

prototypeNamespace.DomManipulation = function () {
};

prototypeNamespace.DomManipulation.prototype = function () {
    // private members

        // Add/Remove element (http://jsperf.com/basic-prototyping-form-validation)
    var addremove = function(eqCtl) {
        for (this.i = 0; this.i < eqCtl.length; this.i++) {
            var newdiv = document.createElement('div');
            var divIdName = 'my' + this.i + 'Div';
            newdiv.setAttribute('id', divIdName);
            newdiv.innerHTML = 'Element Number ' + this.i + ' has been added! "' + divIdName;

            eqCtl[this.i].appendChild(newdiv);

            var divToRemove = document.getElementById(divIdName);
            var d = divToRemove.parentNode;
            d.removeChild(divToRemove);
        }
    },
        show = function(ele) {
            ele.style.display = "block";
        },
        hide = function(ele) {
            ele.style.display = "none";
        },
        toggle = function (ele) {
            if (ele.style.display !== "block" && ele.style.display !== "none") {
                ele.style.display = "none";
            } else if (ele.style.display === "block") {
                ele.style.display = "none";
            } else {
                ele.style.display = "block";
            }
        };
    

    // public members
    return {
        addremove: addremove,
        show: show,
        hide: hide,
        toggle: toggle
    };
}();

prototypeNamespace.Validation = function (eq) {
    this.eqCtl = document.getElementsByClassName(eq);
};

prototypeNamespace.Validation.prototype = function () {
    // private members
    
    // Basic validation based on data attributes in form
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

    // public members
    return {
        validate: validate
    };
}();