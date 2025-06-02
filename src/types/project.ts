export type ProjectsResponse = Project[]

export interface Project {
  id: number
  created_at: number
  created_by: number
  title: string
  description: string
  epics: number
  tasks: number
}
