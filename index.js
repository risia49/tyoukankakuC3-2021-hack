window.onload = function() {
    const spinner = document.getElementById('loading');
    setTimeout(addCss, 2400, spinner);
}

function addCss(spinner) {
    // Add .loaded to .loading
    spinner.classList.add('loaded');
}