import { api } from "../api";

export const PaymentsService = {
  createPayment: (body: any) => api.post('/payments', body, {
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
}
