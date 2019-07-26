"use strict";

function initAccordion(accordionItems) {
    const accordionBtn = accordionItems.querySelector('.js-accordion__button');
    const accordionIcon = accordionItems.querySelector('.js-accordion__icon');
    accordionBtn.addEventListener('click', function () {
        const btnElem = event.currentTarget;
        const isOpenClassName = 'is-open';
        const isOpen = accordionItems.classList.contains(isOpenClassName);
        const collapseContent = accordionItems.querySelector('.js-accordion__content');

        if (isOpen) {
            // close accordion
            accordionItems.classList.remove(isOpenClassName);
            accordionIcon.innerHTML = '&rtrif;';
            btnElem.setAttribute('aria-expanded', false);
            collapseContent.setAttribute('aria-hidden', 'true');
        } else {
            // open accordion
            accordionItems.classList.add(isOpenClassName);
            accordionIcon.innerHTML = '&dtrif;';
            btnElem.setAttribute('aria-expanded', true);
            collapseContent.removeAttribute('aria-hidden');
        }
    });
}

const accordionItems = document.querySelectorAll('.js-accordion');

for (let i = 0; i < accordionItems.length; i++) {
    if (accordionItems[i] != null) {
        initAccordion(accordionItems[i]);
    }
}