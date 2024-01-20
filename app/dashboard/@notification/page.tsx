import Card from '@/public/card'
import Link from 'next/link'
import React from 'react'

const NotificationPage = () => {
  return (
    <Card>Notification Page
    <Link href="/dashboard/archived">Archived</Link>
    </Card>
    
  )
}

export default NotificationPage