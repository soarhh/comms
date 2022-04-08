import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import chevronSouth from '../../../assets/images/chevron-south.svg'
import hash from '../../../assets/images/hash.svg'
import { v4 } from 'uuid'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../backend/firebaseConfig'
export default function ServerCategoryItem({ category, serverId }: any) {
  const { categoryId, categoryName} =  category
  const [state, setState] = useState([] as Array<any>)

  return (
    <div className="mb-4" data-categoryid={ categoryId }>
      <span className="flex items-center justify-start cursor-pointer uppercase">
        <Image src={chevronSouth} alt="chevronSouth" width="18px" height="18px" />
        <h5 className="text-xs text-[#72767D] hover:text-gray-300 font-bold">{ categoryName }</h5>
      </span>
      { state.length > 1 && state.map((channel: any) => {
        const { channelId, channelName } = channel
        return (
          <span 
          key={v4()} 
          className="flex mb-1 items-center w-100 h-8 p-2 hover:bg-[#34373C] rounded-md cursor-pointer text-[#72767D] hover:text-gray-200"
          data-channelid={ channelId }
          >
          <Image src={hash} alt="hash" width="20px" height="20px"/>
          <h5 className="ml-1 font-sm tracking-tight text-m">{ channelName }</h5>
          </span>
        )
        })
      }
    </div>
  )
}
