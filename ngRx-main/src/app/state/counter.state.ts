export interface CounterState {
    count: number;
    reason:string
  }
  
  export const initialState: CounterState = {
    count: 0,
    reason: 'Hiii'
  };

  export interface NameState{
    name:string
  }

  export const initialNameState: NameState = {
    name: 'Angular'}

  