(() => {

    let input          = document.getElementById('password')
    let securityRender = document.getElementById('securityRender')

    const smallSize  = generateRangeArray(0, 3)
    const mediumSize = generateRangeArray(4, 6)

    const SMALL_SIZE  = 1
    const MEDIUM_SIZE = 2
    const BIG_SIZE    = 3

    input.addEventListener('input', (e) => {
        let val = e.target.value

        if (smallSize.includes(val.length)) {
            changeColor('red')
            startAnimation(SMALL_SIZE)
        } else if (mediumSize.includes(val.length)) {
            changeColor('orange')
            startAnimation(MEDIUM_SIZE)
        } else {
            changeColor('limegreen')
            startAnimation(BIG_SIZE)
        }
    })

    function changeColor (color) {
        securityRender.style.setProperty('--security-color', color)
    }

    function generateRangeArray (min, max) {
        let arr = []

        for (let i = min ; i <= max ; i++) {
            arr.push(i)
        }

        return arr
    }

    function startAnimation (size) {
        switch (size) {
            case SMALL_SIZE :
                changeLineStyle('line-1', 'calc(50% - 7px)', '45deg', '100px', '25px')
                changeLineStyle('line-2', 'calc(50% - 7px)', '-45deg','100px', '25px')
                break;

            case MEDIUM_SIZE:
                changeLineStyle('line-1', '63px', 0, '100px', '25px')
                changeLineStyle('line-2', '78px', 0, '100px', '25px')
                break

            case BIG_SIZE:
                changeLineStyle('line-1', '80px', '45deg', '40px', '30px')
                changeLineStyle('line-2', '67px', '-44deg', '80px', '47px')
                break

            default:
                break;
        }
    }

    function changeLineStyle (id, top, rotate, width = '100px', left = null) {
        document.getElementById(id).style.setProperty(`--${id}-top`, top)
        document.getElementById(id).style.setProperty(`--${id}-rotate`, rotate)

        document.getElementById(id).style.setProperty(`--${id}-width`, width)

        if (left != null) {
            document.getElementById(id).style.setProperty(`--${id}-left`, left)
        }
    }

})();
