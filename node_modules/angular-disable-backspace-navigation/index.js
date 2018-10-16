(function(angular) {
    angular.module('disableBackspaceNavigation', []).run(['$document', disableBackspaceNavigation]);

    function disableBackspaceNavigation($document) {
        $document.on('keydown', onKeyDown);
    }

    function onKeyDown(ev) {
        var code, target;
        code = ev.which;
        target = ev.target;

        if (code === 8 && !isInputEl(target)) {
            ev.preventDefault();
        }

    }

    function isInputEl(el) {
        var isEditable, nodeName;
        isEditable = el.isContentEditable;
        nodeName = el.nodeName;

        return isEditable || nodeName === 'input' || nodeName === 'select' || nodeName === 'textArea';
    }
})(window.angular);
