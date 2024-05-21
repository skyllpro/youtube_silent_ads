if (document.location.host === "www.youtube.com") {
  let currentlyPlayingAd = false
  function loop() {
    setTimeout(() => {
      let banners = Array.from(document.querySelectorAll(".ytp-ad-text-overlay .ytp-ad-overlay-close-container, .ytp-ad-image-overlay .ytp-ad-overlay-close-container"))
      let videoAdBanner = document.querySelector(".ytp-ad-player-overlay-layout")

      if (banners.length > 0) {
        Array.from(banners).forEach((e) => {e.click()})
      }

      if (videoAdBanner !== null) {
        let currentlyPlayingAd = false
        if (!currentlyPlayingAd) {
          var videoAds = document.querySelector("video")
          videoAds.muted = true
          videoAds.currentTime = videoAds.duration
          currentlyPlayingAd = true
        }
        let skipAd = document.querySelector("button.ytp-skip-ad-button")
        if (skipAd) {
          skipAd.click()
        }
      } else {
        if (currentlyPlayingAd) {
          var videoAds = document.querySelector("video")
          videoAds.muted = false
          currentlyPlayingAd = false
        }
      }

      loop()
    }, 500)
  }
  loop()
}
