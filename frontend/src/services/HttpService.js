class HttpService {
    createJqReq(headers, type, data = undefined) {
        let objReq = {
            method: type,
            headers,
        };
        if (headers["Content-Type"] === "application/json" && type !== "GET") {
            objReq.body = JSON.stringify(data)
        }
        return { ...objReq };
    }

    handleError(ex) {
        if (ex.responseText) {
            let error = "";
            try {
                let jErr = JSON.parse(ex.responseText);
                error = jErr;
            }
            catch (ex2) {
                console.log("Http Error", ex2);
                error = new Error(ex.responseText);
            }
            throw error;
        }
        if (ex.statusText === "error") {
            throw new Error("Server is down. ");
        }
        else {
            throw new Error("Unexpected Error. ");
        }
    }

    async  handleSuccess(response) {
        return await response.json();
    }

    async get(url, headers = {}) {
        try {
            let data = await fetch(url, this.createJqReq(headers, "GET"));
            return this.handleSuccess(data);
        }
        catch (ex) {
            this.handleError(ex);
        }
    }

    async post(url, data, headers = {}) {
        headers = { "Content-Type": "application/json", ...headers }
        try {
            let responseData = await fetch(url, this.createJqReq(headers, "POST", data));
            return this.handleSuccess(responseData);
        }
        catch (ex) {
            this.handleError(ex);
        }
    }

    async put(url, data, headers = {}) {
        headers = { "Content-Type": "application/json", ...headers }
        try {
            let responseData = await fetch(url, this.createJqReq(headers, "PUT", data));
            return this.handleSuccess(responseData);
        }
        catch (ex) {
            this.handleError(ex);
        }
    }

    async delete(url, data, headers = {}) {
        headers = { "Content-Type": "application/json", ...headers }
        try {
            let responseData = await fetch(url, this.createJqReq(headers, "DELETE", data));
            return this.handleSuccess(responseData);
        }
        catch (ex) {
            this.handleError(ex);
        }
    }
}

const http = new HttpService();
export default http;