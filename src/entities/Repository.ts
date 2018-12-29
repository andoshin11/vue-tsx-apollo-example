export interface IRepositoryProps {
  name: string
  description: string | null
  primaryLanguage: {
    name: string
    color: string | null
  } | null
  forkCount: number
  stargazers: {
    totalCount: number
  }
  url: string
  isFork: boolean
}

export default class RepositoryEntity {
  private _props: IRepositoryProps

  constructor(props: IRepositoryProps) {
    this._props = props
  }

  get props(): IRepositoryProps {
    return this._props
  }
}
