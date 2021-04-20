function urlGenerator(microservice, endpoint) {
    let url;
    let port = '';
    if (process.env.REACT_APP_ENV === 'development') {
        url = process.env.REACT_APP_URL_DEVELOP;
        switch (microservice) {
            case 'depoimentos':
                port = process.env.REACT_APP_DEPOIMENTOS_PORT;
                break;
            case 'frases':
                port = process.env.REACT_APP_FRASES_PORT;
                break;
            case 'questionario':
                port = process.env.REACT_APP_QUESTIONARIO_PORT;
                break;
            case 'autenticador':
                port = process.env.REACT_APP_AUTENTICADOR_PORT;
                break;
            default:
                port = '';
                break;
        }
        url = `${url}${port}/${microservice}/api/${endpoint}/`;
    } else {
        url = process.env.REACT_APP_URL_PRODUCTION;
        if (process.env.REACT_APP_ENV === 'deploy') {
            url = `${url}${port}/${microservice}-dev/api/${endpoint}`;
        } else {
            url = `${url}${port}/${microservice}/api/${endpoint}`;
        }
    }
    return url;
}

function urlGen(microservice, endpoint) {
    let url;
    let port = '';
    if (process.env.REACT_APP_ENV === 'development') {
        url = process.env.REACT_APP_URL_DEVELOP;
        switch (microservice) {
            case 'depoimentos':
                port = process.env.REACT_APP_DEPOIMENTOS_PORT;
                break;
            case 'frases':
                port = process.env.REACT_APP_FRASES_PORT;
                break;
            case 'questionario':
                port = process.env.REACT_APP_QUESTIONARIO_PORT;
                break;
            case 'autenticador':
                port = process.env.REACT_APP_AUTENTICADOR_PORT;
                break;
            default:
                port = '';
                break;
        }
        url = `${url}${port}/${microservice}/${endpoint}`;
    } else {
        url = process.env.REACT_APP_URL_PRODUCTION;
        if (process.env.REACT_APP_ENV === 'deploy') {
            url = `${url}${port}/${microservice}-dev/${endpoint}`;
        } else {
            url = `${url}${port}/${microservice}/${endpoint}`;
        }
    }
    return url;
}

export { urlGen, urlGenerator };
