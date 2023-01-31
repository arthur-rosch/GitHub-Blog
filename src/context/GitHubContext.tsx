import { createContext, ReactNode, useCallback, useState } from 'react'
import { apiUser, apiRepository } from '../lib/axios'
interface InformationRepository {
  repoName: string
  createdAt: string
  comments: string
  urlRepoGithub: string
}
interface InformationUser {
  name: string
  urlGithub: string
  urlPhotoUser: string
  description: string
  workCompany: string
  followers: string | number
}

export interface GitHubContextType { }

interface GitHubContextProviderProps {
  children: ReactNode
}

export const GitHubContext = createContext({} as GitHubContextType)

export function GitHubContextProvider({
  children,
}: GitHubContextProviderProps) {
  const [user, setUser] = useState<InformationUser[]>([])
  const [repository, setRepository] = useState<InformationRepository[]>([])



  return <GitHubContext.Provider value={{}}>{children}</GitHubContext.Provider>
}
