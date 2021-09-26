const $video = document.querySelector('video')
const $player = document.getElementsByClassName('player')
const $playButton = document.getElementById('play')
const $pauseButton = document.getElementById('pause')
const $backwardButton = document.getElementById('backward')
const $forwardButton = document.getElementById('forward')
const $volumeUpButton = document.getElementById('volume-up')
const $volumeMuteButton = document.getElementById('volume-mute')
const $fullScreenButton = document.getElementById('full-screen')

$playButton.addEventListener('click', handlePlay )
$pauseButton.addEventListener('click', handlePause )
$backwardButton.addEventListener('click', handleBackward)
$forwardButton.addEventListener('click', handleForward)
$volumeUpButton.addEventListener('click', handleVolumeUp)
$volumeMuteButton.addEventListener('click', handleVolumeMute)
$fullScreenButton.addEventListener('click', handleFullScreen)

function handleFullScreen() {
    $video.requestFullscreen()
}
function handlePlay(){
    if($video.paused){
        $video.play()
        $playButton.hidden = true
        $pauseButton.hidden = false
    }
}

function handlePause(){
    if($video.played){
        $video.pause()
        $pauseButton.hidden = true
        $playButton.hidden = false
    }
}

function handleBackward() {
    $video.currentTime -= 10
}

function handleForward() {
    $video.currentTime += 10
}

function handleVolumeUp() {
    $volumeUpButton.hidden = true
    $volumeMuteButton.hidden = false
    $video.muted = true
}

function handleVolumeMute() {
    $volumeMuteButton.hidden = true
    $volumeUpButton.hidden = false
    $video.muted = false
}
const $progressBar = document.querySelector('#progress-bar')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
    $progressBar.max = Math.round($video.duration)
    console.log($progressBar.max)
    console.log($video.duration)
    console.log('Metadata loaded')
}

function handleTimeUpdate() {
    console.log($video.currentTime)
    $progressBar.value = Math.round($video.currentTime)
}

$progressBar.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progressBar.value
}