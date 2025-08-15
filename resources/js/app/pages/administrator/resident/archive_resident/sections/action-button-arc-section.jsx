import Button from '@/app/_components/button'
import React from 'react'

export default function ActionButtonArcSection() {
  return (
    <div>
      <div className="flex gap-3">
        <Button>
          Search
        </Button>
        <Button>
          Reset
        </Button>
      </div>
    </div>
  )
}
