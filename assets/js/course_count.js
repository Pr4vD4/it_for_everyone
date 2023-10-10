function count() {
    let result = document.querySelector('#result')
    let months = document.querySelector('#months')
    let course = document.querySelector('#course')
    
    if (course.value == 0) {
        result.value = 'Выберете курс'
        return
    } if (months.value === '') {
        result.value = 'Выберете кол-во месяцев'
        return
    }

    result.value = course.value * months.value

}