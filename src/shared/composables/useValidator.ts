import { helpers, required } from '@vuelidate/validators'
import type { Validation } from '@vuelidate/core'

const validator = () => {
  const lettersOnly = helpers.withMessage(
    'Solo se permiten letras',
    helpers.regex(/^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]+$/),
  )

  const numbersOnly = helpers.withMessage(
    'Solo se permiten hasta 5 dígitos numéricos',
    helpers.regex(/^\d{1,5}$/),
  )

  const AlphanumericOnly = helpers.withMessage(
    'Solo se permiten letras y números (máx. 10 caracteres)',
    helpers.regex(/^[a-zA-Z0-9]{1,10}$/),
  )

  const validateCURP = helpers.withMessage(
    'CURP inválida. Debe tener 18 caracteres válidos',
    helpers.regex(
      /^([A-Z][AEIOU][A-Z]{2}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]\d)$/,
    ),
  )

  const validateRFC = helpers.withMessage(
    'RFC inválido. Debe tener 13 caracteres válidos',
    helpers.regex(/^([A-ZÑ&]{4})(\d{6})([A-Z0-9]{3})$/),
  )

  const requeredField = helpers.withMessage('Este campo es obligatorio', required)

  const validationRulesUserAddress = {
    form: {
      cp: {
        numbersOnly,
        requeredField,
      },
      street: {
        requeredField,
      },
      outerNumber: {
        numbersOnly,
        requeredField,
      },
      interiorNumber: {
        AlphanumericOnly,
      },
      state: {
        lettersOnly,
        requeredField,
      },
      municipality: {
        lettersOnly,
        requeredField,
      },
      colony: {
        lettersOnly,
        requeredField,
      },
    },
  }
  const validationRulesUserInformation = {
    form: {
      name: {
        lettersOnly,
        requeredField,
      },
      firstName: {
        lettersOnly,
        requeredField,
      },
      secondName: {
        lettersOnly,
      },
      curp: {
        validateCURP,
        requeredField,
      },
      rfc: {
        validateRFC,
        requeredField,
      },
    },
  }

  const getErrorMessage = (field: Validation): string => {
    if (!field.$dirty) return ''
    const errors = field.$errors
    return errors.length > 0 ? errors[0].$message : ''
  }

  return {
    validationRulesUserAddress,
    validationRulesUserInformation,
    getErrorMessage,
  }
}

export default validator
