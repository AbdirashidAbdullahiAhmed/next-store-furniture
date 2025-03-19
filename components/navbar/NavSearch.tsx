'use client'
import { Input } from '../ui/input'
import { useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useState, useEffect } from 'react'

function NavSearch() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const searchValue = searchParams.get('search')?.toString() || '' // ✅ Extracted value
  const [search, setSearch] = useState(searchValue)

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('search', value)
    } else {
      params.delete('search')
    }
    replace(`/products?${params.toString()}`)
  }, 300)

  useEffect(() => {
    setSearch(searchValue) // ✅ Updated state correctly
  }, [searchValue])

  return (
    <Input
      type="search"
      placeholder="search product..."
      className="max-w-xs dark:bg-muted"
      onChange={(e) => {
        setSearch(e.target.value)
        handleSearch(e.target.value)
      }}
      value={search}
    />
  )
}

export default NavSearch
