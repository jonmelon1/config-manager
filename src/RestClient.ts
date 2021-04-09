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
}