import React from 'react'
import Layout from '../../layout'
import BookingTableSection from '../_sections/booking-table-section'

export default function Page() {
  return (
    <Layout>
       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <BookingTableSection />
      </div>
    </Layout>
  )
}
