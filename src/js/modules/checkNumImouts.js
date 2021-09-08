const checkNumImputs = (selector) => {
    const numImputs = document.querySelectorAll(selector)
    const phoneInputs = document.querySelectorAll('input[name="user_phone"]')

    numImputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
}

export default checkNumImputs