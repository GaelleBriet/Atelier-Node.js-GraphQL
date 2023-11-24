const API_URL = "http://localhost:4015";

export const authService = {
  login: async (email: string, password: string): Promise<IToken> => {
    const response = await fetch(`${API_URL}/login `, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const { access_token, access_expires } = await response.json();
    return { access_token, access_expires: new Date(access_expires) };
  }
};
