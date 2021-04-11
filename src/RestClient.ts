import { NamedTupleMember } from "typescript"

export class RestClient {

    static baseUrl = "https://localhost:44386"

    static async getEnvironments() : Promise<any> {
        const url = `${RestClient.baseUrl}/api/getEnvironments`
        const response = await window.fetch(url)
        return await response.json()
    }

    
    static async getEnvironment(id: number) : Promise<any> {
        const url = `${RestClient.baseUrl}/api/getConfiguration/${id}`
        const response = await window.fetch(url)
        return await response.json()
    }


    static async getConfigurations() : Promise<any> {
        const url = `${RestClient.baseUrl}/api/getConfigurations`
        const response = await window.fetch(url)
        return await response.json()
    }

    static addConfiguration(configuration: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/api/postConfiguration/`
        return window.fetch(
                    url, 
                    { 
                        method: 'POST', 
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(configuration)
                    }
        )
    }

    static deleteConfiguration(id: NamedTupleMember) : Promise<any> {
        const url = `${RestClient.baseUrl}/api/deleteConfiguration/${id}`
        return window.fetch(
                    url, 
                    { 
                        method: 'DELETE', 
                        headers: { 'Content-Type': 'application/json' }
                    }
        )
    }

    static editConfiguration(configuration: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/api/putConfiguration/`
        return window.fetch(
                    url, 
                    { 
                        method: 'PUT', 
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(configuration)
                    }
        )
    }

    static editEnvironment(environment: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/api/putEnvironment/`
        return window.fetch(
                    url, 
                    { 
                        method: 'PUT', 
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(environment)
                    }
        )
    }

    static addEnvironment(environment: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/api/postEnvironment/`
        return window.fetch(
                    url, 
                    { 
                        method: 'POST', 
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(environment)
                    }
        )
    }

    static async getToken(username: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/api/getToken/${username}`
        const response = await window.fetch(url)
        return await response.json()
    }
}