import axios from "axios";

const API_URL =
"https://rsfcjuvuavmehssfpudh.supabase.co/rest/v1/users";

const API_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZmNqdXZ1YXZtZWhzc2ZwdWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NTUyMzksImV4cCI6MjA5NzQzMTIzOX0.Z_px4H0A-_bap_3rXMwPQVRdW3EYS0Cm9OPHts1pzz0";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const usersAPI = {

  async getUsers() {
    const response = await axios.get(API_URL,{
      headers,
    }); 
    return response.data;
  },

  async createUser(data) {
    const response = await axios.post(
      API_URL,
      data,
      { headers }
    );
    return response.data;
  },

  async updateUser(id,data) {
    await axios.patch(
      `${API_URL}?id=eq.${id}`,
      data,
      { headers }
    );
  },

  async deleteUser(id) {
    await axios.delete(
      `${API_URL}?id=eq.${id}`,
      { headers }
    );
  },

  async login(email,password) {
    const response = await axios.get(
      `${API_URL}?email=eq.${email}&password=eq.${password}`,
      { headers }
    );

    return response.data;
  }
};