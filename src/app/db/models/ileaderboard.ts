export interface ILeaderboard {
  [date: string]: ILeaderboardDay[];
}

export interface ILeaderboardDay{
  name: string;
  point: number;
  time: string;
  prize: string;
  extra: string;
}
// export interface ILeaderboard {
//   "date": ILeaders[]
// }



// export interface ILeaders {
// name: string;
// point: number;
// time: string;
// prize: string;
// extra: string;
// }
