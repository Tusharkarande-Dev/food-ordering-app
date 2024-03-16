import React from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

const LoadingButton = () => {
  return (
    <Button disabled>
       <Loader2 className='mr-2 size-4 animate-spin' />
       loading...
    </Button>
  )
}

export default LoadingButton