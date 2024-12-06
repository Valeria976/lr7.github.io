function createElement(tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}

function initMagicBall() {
    const container = createElement('div', 'container');
    const title = createElement('h1', null, 'Magic Ball');
    const input = createElement('input', null, '');
    input.placeholder = 'Your question';
    
    const button = createElement('button', null, 'Shake');
    
    const magicBall = createElement('div', 'magic-ball');
    const answerContainer = createElement('div', 'answer-container');
    const answer = createElement('div', 'answer', '');

    answerContainer.appendChild(answer);
    magicBall.appendChild(answerContainer);
    container.appendChild(title);
    container.appendChild(input);
    container.appendChild(button);
    document.body.appendChild(container);
    document.body.appendChild(magicBall);

    button.onclick = function () {
        const question = input.value.trim();
        
        // Validation
        if (question === '') {
            answer.textContent = 'Enter a question.';
            answerContainer.style.display = 'flex';
            return;
        }

        const answers = [
            'Yes',
            'No',
            'Maybe',
            'Definitely',
            'Ask later',
            'Not your day'
        ];
        const randomIndex = Math.floor(Math.random() * answers.length);
    
        magicBall.classList.add('shake', 'glow');
        answerContainer.classList.add('shake');

        setTimeout(() => {
            magicBall.classList.remove('shake', 'glow');
            answerContainer.classList.remove('shake');
        }, 500);

        setTimeout(() => {
            answer.textContent = answers[randomIndex];
            answerContainer.style.display = 'flex';
        }, 500);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const url = card.getAttribute('url');
            if (url) {
                window.location.href = url;
            }
        });
    });

    const backButton = document.querySelector('.btn-back');
    if (backButton) {
        backButton.addEventListener('click', () => {
            const returnUrl = backButton.getAttribute('return-url');
            if (returnUrl) {
                window.location.href = returnUrl;
            }
        });
    }

    initMagicBall();
});
