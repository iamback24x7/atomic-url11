export const ALPHABET =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

export const LANDING_PAGE_HTML = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Atomic URL</title>

        <!--Favicon-->
        <link rel="icon" type="image/x-icon" href="https://cdn.jsdelivr.net/gh/davelevine/url-shortener@main/atom-energy.png">

        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;700&display=swap" rel="stylesheet">
        
        <script src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0-beta3/js/all.min.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css" />

        <script>
            const submitURL = () => {
                let statusElement = document.getElementById('status')
                let originalUrlElement = document.getElementById('url')
            
                if (!originalUrlElement.reportValidity()) {
                    throw new Error('Invalid URL.')
                }
            
                statusElement.classList.add('is-loading')
            
                const originalUrl = originalUrlElement.value
                const body = JSON.stringify({ originalUrl })
            
                fetch('/api/url', { method: 'POST', body })
                    .then((data) => data.json())
                    .then((data) => {
                        statusElement.classList.remove('is-loading')
                        statusElement.innerHTML = data.shortUrl
                    })
            
                originalUrlElement.value = ''
            }
            
            const copyToClipboard = (elementId) => {
                var aux = document.createElement('input')
            
                aux.setAttribute('value', document.getElementById(elementId).innerHTML)
            
                document.body.appendChild(aux)
            
                aux.select()
            
                document.execCommand('copy')
            
                document.body.removeChild(aux)
            }
            
        </script>
    <script defer data-domain="dl.is" data-api="/data/api/event" src="/data/js/script.js"></script>
    </head>
    <body>
        <section class="container">
            <div class="columns is-multiline">
                <div class="column is-8 is-offset-2 register">
                    <div class="columns">
                        <div class="column left has-text-centered">
                            <h1 class="title is-1">Atomic URL</h1>
                            <h2 class="subtitle colored is-4">A URL shortener POC built using Cloudflare Workers.</h2>
			            <!--
                            <p>Designing a URL shortener such as <a href="https://tinyurl.com/">TinyURL</a> and <a href="https://bitly.com/">Bitly</a> is one of the most common System Design interview questions in software engineering.</p>
                            </br>
                            <p>While meddling around with <a href="https://workers.cloudflare.com/">Cloudflare Worker</a>, it gave me an idea to build an actual URL shortener that can be used by anyone.</p>
                            </br>
			            -->
                            <p>This is a proof of concept (POC) of how one builds an actual URL shortener service using serverless computing. The source code can be found <a href="https://github.com/davelevine/atomic-url">here</a>.</p>
                        </div>
                        <div class="column right has-text-centered icon-text">
                            <h1 class="title is-2">Shorten a URL</h1>
                            <div class="icon-text">
                                <span class="icon has-text-info">
                                <i class="fas fa-info-circle"></i>
                                </span>
                                <span class="description">Enter a valid URL to shorten</span>
                            </div>
                            </br>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-link is-primary is-medium is-rounded" type="url" placeholder="https://example.com/" id="url" required>
                                </div>
                            </div>
                            <button id="submit" class="button is-block is-primary is-rounded is-fullwidth is-medium" onclick="submitURL()">Shorten</button>
                            <br />
                            <button class="button is-info is-rounded is-small" onclick="copyToClipboard('status')">
                            <span class="icon">
                            <i class="fas fa-copy"></i>
                            </span>
                            <span id="status" ></span>
                            </button>
                        </div>
                    </div>
                </div>
                <!--
                <div class="column is-8 is-offset-2">
                    <br>
                    <nav class="level">
                        <div class="level-right">
                            <small class="level-item" style="color: var(--textLight)">
                            &copy; Atomic URL originally created by &nbsp<a href="https://s.jerrynsh.com/">Jerry Ng</a>. All Rights Reserved.
                            </small>
                        </div>
                    </nav>
                </div>
                -->
            </div>
        </section>
    </body>
    <style>
        :root {
        --brandColor: hsl(166, 67%, 51%);
        --background: rgb(247, 247, 247);
        --textDark: hsla(0, 0%, 0%, 0.66);
        --textLight: hsla(0, 0%, 0%, 0.33);
        }
        body {
        background: var(--background);
        height: 100vh;
        color: var(--textDark);
        }
        .field:not(:last-child) {
        margin-bottom: 1rem;
        }
        .register {
        margin-top: 6rem;
        background: white;
        border-radius: 10px;
        }
        .left,
        .right {
        padding: 2.0rem;
        }
        .left {
        border-right: 5px solid var(--background);
        }
        .left .title {
        font-weight: 800;
        letter-spacing: -1px;
        }
        .left .colored {
        color: var(--brandColor);
        font-weight: 500;
        margin-top: 1rem !important;
        letter-spacing: -1px;
        }
        .left p {
        color: var(--textLight);
        font-size: 1.15rem;
        }
        .right .title {
        margin-top: 0.3rem;
        margin-bottom: 1rem !important;
        font-weight: 800;
        letter-spacing: -1px;
        }
        .right .description {
        margin-top: 1rem;
        margin-bottom: 1rem !important;
        color: var(--textLight);
        font-size: 1.15rem;
        }
        .right small {
        color: var(--textLight);
        }
        input {
        font-size: 1rem;
        }
        input:focus {
        border-color: var(--brandColor) !important;
        box-shadow: 0 0 0 1px var(--brandColor) !important;
        }
        .fab,
        .fas {
        color: var(--textLight);
        margin-right: 1rem;
        }
    </style>
</html>
`
