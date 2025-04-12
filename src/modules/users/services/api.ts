import axios from 'axios'
import { showSuccess, showError } from '../utils/notifier'

export async function createUser(payload: Record<string, any>) {
  try {
    const response = await axios.post('http://httpbin.org/post', payload)
    showSuccess('Formulario enviado correctamente')
    return response.data
  } catch (error: any) {
    showError('No se pudo enviar el formulario')
    throw error
  }
}

export async function listUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
  } catch (error: any) {
    showError('No se pudo cargar la lista de usuarios')
    throw error
  }
}
