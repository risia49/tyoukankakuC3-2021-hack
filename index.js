window.onload = function() {
    const spinner = document.getElementById('loading');
    // タイムアウト時間の指定
    setTimeout(addCss, , spinner);
}

function addCss(spinner) {
    // Add .loaded to .loading
    spinner.classList.add('loaded');
}
