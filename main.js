const sonic = document.querySelector('#sonicGif')
const enemy = document.querySelector('#enemyImg')

// função jump
document.addEventListener('keydown', jumpAction)
function jumpAction() {
    sonic.classList.add('jump')

    setTimeout(() => {
        sonic.classList.remove('jump')
    }, 750)
}

// função game over
const gameOver = setInterval(() => {
    const enemyPosition = enemy.offsetLeft
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '')

    if (enemyPosition <= 110 && sonicPosition < 40 && enemyPosition > 0)
    {
        // altera os aspectos de CSS
        enemy.style.animation = 'none'
        enemy.style.right = '85%'

        sonic.src = './images/sonicGameOver.webp'
        sonic.style.width = '80px'
        sonic.style.bottom = `${sonicPosition}px`

        document.querySelector('#playAgainMenu').style.display = 'block'
        clearInterval(gameOver)
    }
}, 50)

//função play again
function playAgain()
{
    document.location.reload()
}
document.getElementById('btnPlayAgain').addEventListener('click', playAgain)
