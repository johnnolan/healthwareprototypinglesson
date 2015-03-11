window.onload = function () {
    var validation = new prototypeNamespace.Validation('validate-form');
    validation.validate();
    
    var manipulation = new prototypeNamespace.DomManipulation();
    manipulation.addremove(document.getElementsByClassName('validate-form'));

    function showEvent() {
        manipulation.show(document.getElementById('exampleInputFullName').parentNode);
    }
    function hideEvent() {
        manipulation.hide(document.getElementById('exampleInputFullName').parentNode);
    }
    function toggleEvent() {
        manipulation.toggle(document.getElementById('exampleInputPassword1').parentNode);
    }
    
    document.getElementById('showElement').addEventListener('click', showEvent);
    document.getElementById('hideElement').addEventListener('click', hideEvent);
    document.getElementById('toggleElement').addEventListener('click', toggleEvent);
};