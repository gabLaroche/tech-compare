(function () {
    const openBtn = document.getElementById('htmlOpenBtn');
    const closeBtn = document.getElementById('htmlCloseBtn');
    const dialog = document.getElementById('htmlDialog');

    openBtn.addEventListener("click", () => {
        dialog.showModal();
    });

    closeBtn.addEventListener("click", () => {
        dialog.close();
    });
}());