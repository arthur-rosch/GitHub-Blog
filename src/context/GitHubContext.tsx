import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
interface InformationRepository {
  repoName: string
  createdAt: string
  comments: string
  urlRepoGithub: string
}
interface GithubUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string | null
  blog: string
  location: string
  email: string | null
  hireable: string | null
  bio: string
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export interface GitHubContextType {
  user: GithubUser
}

interface GitHubContextProviderProps {
  children: ReactNode
}

export const GitHubContext = createContext({} as GitHubContextType)

export function GitHubContextProvider({
  children,
}: GitHubContextProviderProps) {
  const [user, setUser] = useState<GithubUser>({})
  const [repository, setRepository] = useState<InformationRepository[]>([])

  const fetchUser = useCallback(async (query?: string) => {
    const response = await api.get('/arthur-rosch', {})
    console.log(response.data)
    setUser(response.data)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <GitHubContext.Provider value={{ user }}>{children}</GitHubContext.Provider>
  )
}
