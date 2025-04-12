import Swal from 'sweetalert2'

export function showSuccess(message: string, title = 'Éxito') {
  Swal.fire({
    icon: 'success',
    title,
    text: message,
    confirmButtonColor: '#4CAF50',
    confirmButtonText: 'Aceptar',
    timer: 10000,
    timerProgressBar: true,
  })
}

export function showError(message: string, title = 'Error') {
  Swal.fire({
    icon: 'error',
    title,
    text: message,
    confirmButtonColor: '#f44336',
    confirmButtonText: 'Cerrar',
  })
}

export function showWarning(message: string, title = 'Atención') {
  Swal.fire({
    icon: 'warning',
    title,
    text: message,
    confirmButtonColor: '#ff9800',
    confirmButtonText: 'Entendido',
  })
}
