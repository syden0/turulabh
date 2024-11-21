function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function showCelebration() {
    document.getElementById('celebration').classList.remove('hidden');
}
