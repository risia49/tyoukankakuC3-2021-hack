window.onload = function() {
    const spinner = document.getElementById('loading');
    // タイムアウト時間の指定
    setTimeout(addCss, 60, spinner);
}

function addCss(spinner) {
    // Add .loaded to .loading
    spinner.classList.add('loaded');
}