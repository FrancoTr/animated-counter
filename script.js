const counters = document.querySelectorAll('.counter'); //Selects all counters, resulting in a notelist (simmilar to an array)
const speed = 200; //the lower this is, the faster the animation goes

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target')     //The + sign forces the value to be a number
        const count = +counter.innerText

        const inc = target / speed

        if (count < target) {
            counter.innerText = Math.ceil(count + inc) //it rounds up discrete values such as likes or followers
            setTimeout(updateCount, 1)  //this function runs the increment until it reachs the respective target
        } else {
            count.innerText = target
        }
    }
    updateCount()
})