export class RestClient {

    static baseUrl = "https://localhost:44386"

    static async getEnvironments() : Promise<any> {
        const url = `${RestClient.baseUrl}/api/getEnvironments`
        const response = await window.fetch(url)
        return await response.json()
    }
}