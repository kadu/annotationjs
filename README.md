
## Acknowledgements

```bash

   _____                        __          __  .__                        __
  /  _  \   ____   ____   _____/  |______ _/  |_|__| ____   ____          |__| ______
 /  /_\  \ /    \ /    \ /  _ \   __\__  \\   __\  |/  _ \ /    \         |  |/  ___/
/    |    \   |  \   |  (  <_> )  |  / __ \|  | |  (  <_> )   |  \        |  |\___ \
\____|__  /___|  /___|  /\____/|__| (____  /__| |__|\____/|___|  / /\ /\__|  /____  >
        \/     \/     \/                 \/                    \/  \/ \______|    \/
```
## Recursos

- Conecta no chat da Twitch
- Monitora !hello (respondendo com heya)
- Monitora !ideia <mensagem> (respondendo com Anotado, obrigado)
- Grava em banco de dados (SQLite3 - arquivo xordroid.db)




## Instalação

Clonar o projeto do Git, no diretorio, acetar o .env (descrito abaixo).

```bash
  npm install  
```

Esse comando ira baixar todas as dependencias
- dotenv
- tmi.js
- sqlite
- sqlite3
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`BOT_USERNAME`

`OAUTH_TOKEN`

`CHANNEL_NAME`

`CLIENT_ID`
## Rorando o bot

```bash
  npm start
```

## Visualizando as informações do Banco

Para visualizar o que está no banco podemos usar qualquer cliente de SQLite, como o [dbeaver](https://dbeaver.io/).

## Authors

- [@kadu](https://www.github.com/kadu)


