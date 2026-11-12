// YouTube Error 153 happens if an iframe is loaded without a usable Referer,
// commonly when HTML is opened from a local file:// path.
// Show a clickable gameplay poster everywhere and embed only on a hosted page,
// after the visitor explicitly chooses in-page playback.
(() => {
  const hosted = window.location.protocol === 'https:' || window.location.protocol === 'http:';
  document.querySelectorAll('.portfolio-video[data-video-id]').forEach((container) => {
    const button = container.querySelector('.portfolio-video-embed-button');
    const hint = container.querySelector('.portfolio-video-hint');
    const id = container.dataset.videoId;
    if (!button || !id) return;
    if (!hosted) {
      if (hint) hint.textContent = 'ローカルプレビューでは動画埋め込みが制限されます。YouTubeで見るボタンをご利用ください。';
      return;
    }
    button.hidden = false;
    if (hint) hint.textContent = 'サイト内でも再生できます。エラーの場合はYouTubeで開いてください。';
    button.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`;
      iframe.title = container.dataset.videoTitle || 'ゲームプレイ動画';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.allowFullscreen = true;
      const direct = document.createElement('a');
      direct.className = 'portfolio-video-live-link';
      direct.href = `https://www.youtube.com/watch?v=${encodeURIComponent(id)}`;
      direct.target = '_blank';
      direct.rel = 'noopener noreferrer';
      direct.textContent = '再生できない場合はYouTubeで見る ↗';
      container.replaceChildren(iframe, direct);
    }, { once: true });
  });
})();
