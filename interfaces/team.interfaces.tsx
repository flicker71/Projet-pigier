// @types.todo.ts
export interface ITeam {
    id: string;
    name: string;
  }

  export type TeamContextType = {
    teams: ITeam[];
    
  };