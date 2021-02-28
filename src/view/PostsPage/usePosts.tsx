import { useState } from 'react'
import useSWR from 'swr'

import { useInterval } from '../../util'

const fetcher = (input: RequestInfo, init?: RequestInit | undefined) =>
  fetch(input, init).then((res) => res?.json())

// initially get one post
let url = `${process.env.RAZZLE_API_BASE}/api?count=1`

const REFRESH_INTERVAL_DEFAULT = 2000

export const usePosts = () => {
  const [sleeping, setSleeping] = useState(true)
  const [posts, setPosts] = useState([])
  useSWR(sleeping ? null : url, fetcher, {
    errorRetryInterval: REFRESH_INTERVAL_DEFAULT,
    onErrorRetry: (error, _key, _config, revalidate, { retryCount = 0 }) => {
      // Task instruction: "In case of any failure conditions, the tweet updates can pause or stop
      // but should resume as soon as possible and no error messages should be shown to the user"
      // This could be removed in favour of the exponential backoff functionality which swr has
      setTimeout(
        () => revalidate({ retryCount: retryCount + 1 }),
        // prevent retries at 0 if offline
        navigator.onLine ? 0 : 3000
      )
    },
    onSuccess: (data) => {
      setPosts((prev) => {
        if (data?.length) {
          // the latest post is expected at the start of the response array
          // this is used to get the next set of posts
          url = `${process.env.RAZZLE_API_BASE}/api?afterId=${data[0].id}`
          setSleeping(true)
          return data.concat(prev)
        }
        return prev
      })
    },
    refreshInterval: REFRESH_INTERVAL_DEFAULT,
    revalidateOnMount: true,
  })

  useInterval(REFRESH_INTERVAL_DEFAULT, () => {
    // this should ensure api requests occur >= two seconds
    setSleeping(false)
  })

  return {
    posts,
  }
}
