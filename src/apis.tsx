export function standardApi<T>(url: string, method: string): Promise<T> {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');

    return fetch(url, { method: method, headers: requestHeaders }).then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<T>;
      },
    );
  }