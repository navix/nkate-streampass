export interface Season {
  title: string;
  stages: SeasonStage[];
}

export interface SeasonStage {
  amount: number;
  emoji?: string;
  description: string;
  ready?: true;
  done?: true;
  youtube?: Youtube[];
}

export interface Youtube {
  id: string;
  start?: number
}
