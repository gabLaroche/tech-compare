"use strict";

function initAccordion(accordionItem) {
    const accordionBtn = accordionItem.querySelector('.js-accordion__button');
    const accordionIcon = accordionItem.querySelector('.js-accordion__icon');
    accordionBtn.addEventListener('click', function () {
        const btnElem = event.currentTarget;
        const isOpenClassName = 'is-open';
        const isOpen = accordionItem.classList.contains(isOpenClassName);
        const collapseContent = accordionItem.querySelector('.js-accordion__content');

        if (isOpen) {
            // close accordion
            accordionItem.classList.remove(isOpenClassName);
            accordionIcon.innerHTML = '&rtrif;';
            btnElem.setAttribute('aria-expanded', false);
            collapseContent.setAttribute('aria-hidden', 'true');
        } else {
            // open accordion
            accordionItem.classList.add(isOpenClassName);
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