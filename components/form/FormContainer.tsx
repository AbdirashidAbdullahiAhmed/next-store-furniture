'use client'

import { useFormState } from 'react-dom'
import { useEffect } from 'react'
import { toast } from 'sonner' // ✅ Correct Sonner import
import { actionFunction } from '@/utils/types'

const initialState = {
  message: '',
}

function FormContainer({
  action,
  children,
}: {
  action: actionFunction
  children: React.ReactNode
}) {
  const [state, formAction] = useFormState(action, initialState)

  useEffect(() => {
    if (state.message) {
      toast(state.message) // ✅ Use Sonner's toast directly
    }
  }, [state])

  return <form action={formAction}>{children}</form>
}

export default FormContainer
