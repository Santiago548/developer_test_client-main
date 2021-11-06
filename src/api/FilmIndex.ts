export async function fetchFilmsJson<Response = any>(url: string, init?: RequestInit): Promise<Response> {
    const response = await fetch(
      `${url}`,
      {
        ...init ?? {},
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
  
  
    return response.json()
  }