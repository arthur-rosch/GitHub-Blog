import { createContext, ReactNode } from 'react'

export interface GitHubContextType { }

interface GitHubContextProviderProps {
  children: ReactNode
}

export const GitHubContext = createContext({} as GitHubContextType)

export function GitHubContextProvider({
  children,
}: GitHubContextProviderProps) {
  return <GitHubContext.Provider value={{}}>{children}</GitHubContext.Provider>
}
