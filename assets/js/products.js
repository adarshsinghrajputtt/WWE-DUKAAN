const filterButtons = document.querySelectorAll('.products__item')
const productCards = document.querySelectorAll('.product__card')

function filterProducts(category) {
    productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category')
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block'
            sr.reveal(card, {interval: 100})
        } else {
            card.style.display = 'none'
        }
    })
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class
        filterButtons.forEach(btn => btn.classList.remove('active-product'))
        // Add active class to clicked button
        button.classList.add('active-product')
        // Filter products
        const category = button.getAttribute('data-filter')
        filterProducts(category)
    })
})