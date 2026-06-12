# Site Dia dos Namorados — Ester e Fernando

Arquivos principais:
- `index.html`: página do site.
- `style.css`: visual, cores e responsividade.
- `script.js`: música, botão de compartilhar, animações e galeria.
- `assets/`: fotos e música.

Como publicar:
1. Extraia o ZIP.
2. Suba a pasta em um serviço como Netlify, Vercel ou GitHub Pages.
3. Envie o link para a Ester.

Observação: em celulares, a música normalmente só toca depois que a pessoa aperta o botão, por regra do navegador.


## CORREÇÃO DO MODAL E MÚSICA

Se a tela ficar escura com uma imagem quebrada no centro, confirme que o arquivo style.css contém a linha: `.lightbox[hidden]{display:none!important}`.

Para a música tocar, o arquivo precisa estar exatamente em `assets/musica.mp3`. No celular, ela só toca depois do toque no botão “Tocar nossa música”, por bloqueio normal dos navegadores.
