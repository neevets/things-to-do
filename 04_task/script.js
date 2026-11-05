document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('message-form');
    const input = document.getElementById('message-input');
    const messages = document.getElementById('messages');
    const friends = document.querySelectorAll('.friend');

    // Enviar un missatge
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const text = input.value.trim();

        if (text !== '') {
            const message = document.createElement('div');
            message.className = 'message mine';

            const avatar = document.createElement('div');
            avatar.className = 'avatar purple';
            avatar.textContent = 'S';

            const content = document.createElement('div');
            content.className = 'message-content';

            const info = document.createElement('div');
            info.className = 'message-info';

            const name = document.createElement('strong');
            name.textContent = 'Tu';

            const time = document.createElement('small');
            time.textContent = new Date().toLocaleTimeString('ca-ES', {
                hour: '2-digit',
                minute: '2-digit'
            });

            const paragraph = document.createElement('p');
            paragraph.textContent = text;

            info.appendChild(name);
            info.appendChild(time);
            content.appendChild(info);
            content.appendChild(paragraph);

            message.appendChild(avatar);
            message.appendChild(content);
            messages.appendChild(message);

            input.value = '';
            messages.scrollTop = messages.scrollHeight;
        }
    });

    // Canviar de conversa
    friends.forEach((friend) => {
        friend.addEventListener('click', () => {
            friends.forEach((item) => item.classList.remove('active'));
            friend.classList.add('active');

            const name = friend.dataset.name;
            const status = friend.dataset.status;

            document.getElementById('chat-name').textContent = name;
            document.getElementById('chat-status').textContent = status;
            document.getElementById('header-avatar').textContent = name[0];

            // Esborrem els missatges de la conversa anterior
            messages.innerHTML = '<div class="day">AVUI</div>';

            const welcome = document.createElement('p');
            welcome.textContent = 'Aquesta és la conversa amb ' + name + '.';
            welcome.style.color = '#949ba4';
            welcome.style.textAlign = 'center';
            welcome.style.marginTop = '30px';
            messages.appendChild(welcome);
        });
    });
});
