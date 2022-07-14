export default class API {

    static contactMe(body) {
        return fetch(`http://127.0.0.1:8000/api/contact-us/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( body )
            }).then( response => response.json())
    }

    static projecstList() {
        return fetch('http://127.0.0.1:8000/api/projects/list/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then( res => res.json());
    }

    static nftstList() {
        return fetch('http://127.0.0.1:8000/api/nft-collections/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then( res => res.json());
    }

    static nftstDetails(nft_id) {
        return fetch(`http://127.0.0.1:8000/api/nft-collections/nft/${nft_id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then( res => res.json());
    }

    static educationList() {
        return fetch('http://127.0.0.1:8000/api/education/list/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then( res => res.json());
    }
}