import React, { useEffect } from 'react'
import Layout from '../../layout'
import ActivityCreateSection from './sections/activity-create-section'
import store from '@/app/store/store'
import { get_categories_thunk } from '@/app/redux/categories-thunk'
import { get_resources_thunk } from '@/app/redux/resources-thunk'

export default function Page() {

  useEffect(()=>{
    store.dispatch(get_categories_thunk())
    store.dispatch(get_resources_thunk())
  },[])
  return (
    <Layout>
        <ActivityCreateSection />
    </Layout>
  )
}
