document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        console.log('Button clicked:', button.innerText);
        console.log('Content found:', content);

        if (content) { 
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        } else {
            console.error('I DROPPED MY PANTS:', button);
        }
    });
});
