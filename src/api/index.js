const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const getURL = (path) => {
    const url = BASE_URL + path;
    return url;
}

const getOptions = (method, body, token) => ({
    method: method ? method.toUpperCase() : 'GET',
    headers: {
        'Content-type': 'application/json',
        ...(token && {'Authorization': `Bearer ${token}`})
    },
    ...( body && { body: JSON.stringify(body) }),
})

export const fetchFromAPI = async({path, method, body, token}) => {
    try {
        const result = await fetch(
            getURL(path),
            getOptions(method, body, token),
        );

        const response = await result.json();
        console.log("response: ", response);
        if (response.error) throw response.error;
        return response;
    } catch (error) {
        console.error(error);
    }
}