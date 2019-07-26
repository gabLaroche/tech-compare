(function () {
    const jsOpenBtn = document.getElementById('jsOpenBtn');
    const jsCloseBtn = document.getElementById('jsCloseBtn');
    const jsDialog = document.getElementById('jsDialog');
    const focusableEls = jsDialog.querySelectorAll('button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];

    function showModal() {
        jsDialog.classList.remove("hidden");
        document.getElementById("jsDialogContent").focus();
    }

    function close() {
        jsDialog.classList.add("hidden");
    }

    jsOpenBtn.addEventListener("click", () => {
        showModal();
    });

    jsCloseBtn.addEventListener("click", () => {
        close();
    });

    jsDialog.addEventListener("keydown", event => {
        if (event.key === "Escape" || event.key === "Esc") {
            close();
        }

        /* Trap focus inside modal */
        if (event.key === 'Tab' || event.keyCode === 9) {
            if ( event.shiftKey ) /* shift + tab */ {
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    event.preventDefault();
                }
            } else /* tab */ {
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus();
                    event.preventDefault();
                }
            }
        }
    })
}());