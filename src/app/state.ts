export interface State{
  playlist: any[];
  //This index signature states that when State is indexed with a string, it will return an any array.
  [key: string]: any[];
}
