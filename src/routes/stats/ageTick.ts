import { readable } from 'svelte/store'

export default function () {
    return readable("", set => {

        const tick = () => set(getAge())

        // force an update to initialize the store with a non-null value
        tick();

        // setup an interval timer to update the store's value repeatedly over time
        const interval = setInterval(tick, 25)

        // return unsubscribe callback:
        // it will stop the timer when the store is destroyed
        return () => clearInterval(interval)
    })
}

function getAge() {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1995-08-27T01:00:00');
    const timeDiff = Math.abs(Date.now() - birthTime.getTime());
    return (timeDiff / divisor).toFixed(11);
}