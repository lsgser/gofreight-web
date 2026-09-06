import { useEffect, useId, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchDocs, type DocSearchResult } from '../lib/docSearch'
import { searchShortcutLabel } from '../lib/platform'

type Props = {
  compact?: boolean
}

export function DocSearch({ compact = false }: Props) {
  const inputId = useId()
  const listId = useId()
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<DocSearchResult[]>([])
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const shortcut = searchShortcutLabel()

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
        setOpen(true)
      }
      if (e.key === 'Escape') {
        setOpen(false)
        inputRef.current?.blur()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setActive(0)
      return
    }
    const id = window.setTimeout(() => {
      setResults(searchDocs(query))
      setActive(0)
    }, 150)
    return () => window.clearTimeout(id)
  }, [query])

  function goTo(slug: string) {
    navigate(`/docs/${slug}`)
    setQuery('')
    setOpen(false)
    inputRef.current?.blur()
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || results.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => (i + 1) % results.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => (i - 1 + results.length) % results.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      goTo(results[active].slug)
    }
  }

  return (
    <div ref={wrapRef} className={compact ? 'doc-search doc-search-compact' : 'doc-search'}>
      <label htmlFor={inputId} className="visually-hidden">
        Search documentation
      </label>
      <div className="doc-search-input-wrap">
        <span className="doc-search-icon" aria-hidden="true">⌕</span>
        <input
          ref={inputRef}
          id={inputId}
          type="search"
          className="doc-search-input"
          placeholder="Search docs…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          role="combobox"
          aria-expanded={open && results.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          autoComplete="off"
        />
        {!compact && <kbd className="doc-search-kbd">{shortcut}</kbd>}
      </div>

      {open && query.trim() && (
        <ul id={listId} className="doc-search-results" role="listbox">
          {results.length === 0 ? (
            <li className="doc-search-empty">No results for “{query}”</li>
          ) : (
            results.map((result, index) => (
              <li key={result.slug} role="option" aria-selected={index === active}>
                <button
                  type="button"
                  className={index === active ? 'doc-search-result active' : 'doc-search-result'}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => goTo(result.slug)}
                >
                  <strong>{result.title}</strong>
                  {result.description && <span>{result.description}</span>}
                  {result.snippet && <small>{result.snippet}</small>}
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  )
}
