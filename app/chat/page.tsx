// 'use client'
import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { Session } from '@/lib/types'
import { getMissingKeys } from '@/app/actions'
import React from 'react';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '@/context/AuthContext';


export const metadata = {
  title: 'StockBot'
}

export default async function IndexPage() {
  const id = nanoid()
  const missingKeys = await getMissingKeys()

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <Chat id={id} missingKeys={missingKeys} />
    </AI>
  )
}
